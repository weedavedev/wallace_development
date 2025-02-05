import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';  // Fixed import

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : process.env.BASE_PATH,
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				if (path.startsWith('/media/')) {
					return;
				}
				throw new Error(message);
			}
		}
	},
};

export default config;