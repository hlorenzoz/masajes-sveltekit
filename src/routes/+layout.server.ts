import type { LayoutServerLoad } from './$types';

export const trailingSlash = 'always';

export const load = (({ locals }) => {
  return { lang: locals.lang };
}) satisfies LayoutServerLoad;
