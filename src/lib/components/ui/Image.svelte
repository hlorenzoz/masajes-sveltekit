<script lang="ts">
  import { srcsetFor } from '$lib/images';

  interface Props {
    src: string;
    alt: string;
    width: number;
    height: number;
    /** CSS class for the wrapper (controls aspect/cover via object-fit). */
    class?: string;
    /**
     * Tells the browser how wide the image renders per viewport so it can pick
     * the smallest adequate variant. Defaults to the intrinsic `width` (correct
     * for fixed-size images like avatars/thumbs); pass an explicit value for
     * fluid/full-bleed images, e.g. "(min-width: 1024px) 50vw, 100vw".
     */
    sizes?: string;
    /** Eager-load above-the-fold images (e.g. the hero). */
    priority?: boolean;
  }

  let { src, alt, width, height, class: extra = '', sizes, priority = false }: Props = $props();

  const avifSrcset = $derived(srcsetFor(src, 'avif'));
  const webpSrcset = $derived(srcsetFor(src, 'webp'));
  const resolvedSizes = $derived(sizes ?? `${width}px`);

  let loaded = $state(false);
</script>

<picture class="contents">
  <source type="image/avif" srcset={avifSrcset} sizes={resolvedSizes} />
  <source type="image/webp" srcset={webpSrcset} sizes={resolvedSizes} />
  <img
    {src}
    {alt}
    {width}
    {height}
    loading={priority ? 'eager' : 'lazy'}
    fetchpriority={priority ? 'high' : 'auto'}
    decoding="async"
    onload={() => (loaded = true)}
    class="h-full w-full object-cover transition-[opacity,filter] duration-700 ease-zen {loaded
      ? 'opacity-100 blur-0'
      : 'opacity-0 blur-md'} {extra}"
  />
</picture>
