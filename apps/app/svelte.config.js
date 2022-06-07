import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    postcss: true,
  }),
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    adapter: vercel(),
    vite: {
      resolve: {
        alias: {
          '@lib': resolve('./src/lib'),
          '@utils': resolve('./src/lib/utils'),
        },
      },
    },
  },
};

export default config;
