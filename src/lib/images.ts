/**
 * Responsive image helpers.
 *
 * Variants are produced by `scripts/images.mjs` (npm run images) following the
 * convention `name-<width>.<avif|webp>`. Keep VARIANT_WIDTHS in sync with the
 * WIDTHS array in that script.
 */
export const VARIANT_WIDTHS = [256, 480, 768, 1024] as const;

/** Strip the extension from `/images/hero.webp` -> `/images/hero`. */
function basePath(src: string): string {
  return src.replace(/\.(webp|avif|jpe?g|png)$/i, '');
}

/**
 * Build a `srcset` string for a given format from a base image src.
 *
 * @example
 * srcsetFor('/images/hero.webp', 'avif')
 * // '/images/hero-256.avif 256w, /images/hero-480.avif 480w, …'
 */
export function srcsetFor(src: string, ext: 'avif' | 'webp'): string {
  const base = basePath(src);
  return VARIANT_WIDTHS.map((w) => `${base}-${w}.${ext} ${w}w`).join(', ');
}
