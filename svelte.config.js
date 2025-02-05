import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			strict: true
		}),
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