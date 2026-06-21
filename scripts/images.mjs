#!/usr/bin/env node
/**
 * Responsive image generator.
 *
 * Reads every "original" image in static/images/ and emits viewport-oriented
 * variants in AVIF + WebP for each one. The browser picks the right variant by
 * real viewport width AND device pixel ratio via <picture> srcset/sizes — see
 * src/lib/components/ui/Image.svelte and src/lib/images.ts.
 *
 * Naming convention:
 *   original:  hero.webp            (no width suffix — the source of truth)
 *   variants:  hero-480.avif, hero-480.webp, hero-768.avif, ...
 *
 * Idempotent: a variant is regenerated only when missing or older than its
 * source. Run with `--force` to rebuild everything.
 *
 * Usage:
 *   node scripts/images.mjs            # build stale variants
 *   node scripts/images.mjs --force    # rebuild all
 */
import { readdir, stat, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = path.resolve(__dirname, '../static/images');

/**
 * Device-oriented target widths (CSS px the layout might render at; the browser
 * multiplies by DPR when choosing). Keep this in sync with VARIANT_WIDTHS in
 * src/lib/images.ts.
 *   256  -> avatars / thumbnails
 *   480  -> phones
 *   768  -> tablets
 *   1024 -> desktop (also the source ceiling here)
 */
const WIDTHS = [256, 480, 768, 1024];

/** Encoder settings per format. AVIF is far denser, so it can run a lower q. */
const FORMATS = {
  avif: { ext: 'avif', options: { quality: 50, effort: 4 } },
  webp: { ext: 'webp', options: { quality: 78, effort: 5 } }
};

/** Source = a .webp/.jpg/.png/.jpeg that is NOT a generated variant. */
const SOURCE_EXT = /\.(webp|jpe?g|png)$/i;
/**
 * A generated variant ends in `-<one of WIDTHS>.<webp|avif>`, or is any .avif.
 * Restricting to the known widths avoids misreading originals like
 * `studio-1.webp` as a width-1 variant.
 */
const WIDTH_SUFFIX = new RegExp(`(-(${WIDTHS.join('|')})\\.(webp|avif)|\\.avif)$`, 'i');
const force = process.argv.includes('--force');

/** True when `out` is missing or older than `src` (needs a rebuild). */
async function isStale(src, out) {
  if (force || !existsSync(out)) return true;
  const [s, o] = await Promise.all([stat(src), stat(out)]);
  return s.mtimeMs > o.mtimeMs;
}

async function processSource(file) {
  const srcPath = path.join(IMAGES_DIR, file);
  const name = file.replace(SOURCE_EXT, '');
  const meta = await sharp(srcPath).metadata();
  const maxW = meta.width ?? Math.max(...WIDTHS);

  // Never upscale: only widths the source can actually fill.
  const targets = WIDTHS.filter((w) => w <= maxW);
  if (targets.length === 0) targets.push(maxW);

  const jobs = [];
  for (const w of targets) {
    for (const { ext, options } of Object.values(FORMATS)) {
      const out = path.join(IMAGES_DIR, `${name}-${w}.${ext}`);
      jobs.push(
        (async () => {
          if (!(await isStale(srcPath, out))) return { out, skipped: true };
          await sharp(srcPath)
            .resize({ width: w, withoutEnlargement: true })
            .toFormat(ext, options)
            .toFile(out);
          return { out, skipped: false };
        })()
      );
    }
  }

  const results = await Promise.all(jobs);
  const built = results.filter((r) => !r.skipped).length;
  const skipped = results.length - built;
  return { name, widths: targets, built, skipped };
}

async function main() {
  if (!existsSync(IMAGES_DIR)) {
    await mkdir(IMAGES_DIR, { recursive: true });
  }

  const entries = await readdir(IMAGES_DIR);
  const sources = entries
    .filter((f) => SOURCE_EXT.test(f) && !WIDTH_SUFFIX.test(f))
    .sort();

  if (sources.length === 0) {
    console.log('No source images found in static/images/.');
    return;
  }

  console.log(
    `Generating ${WIDTHS.join(', ')}px variants (AVIF + WebP) for ${sources.length} image(s)${force ? ' [--force]' : ''}…\n`
  );

  let totalBuilt = 0;
  let totalSkipped = 0;
  for (const file of sources) {
    const { name, widths, built, skipped } = await processSource(file);
    totalBuilt += built;
    totalSkipped += skipped;
    const tag = built > 0 ? `✓ ${built} built` : '· up to date';
    console.log(`  ${name.padEnd(22)} [${widths.join(',')}]  ${tag}${skipped ? `, ${skipped} cached` : ''}`);
  }

  console.log(`\nDone. ${totalBuilt} file(s) written, ${totalSkipped} cached.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
