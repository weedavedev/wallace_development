import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		},
		extend: {
			fontFamily: {
				source: ['Source Sans Pro', 'sans-serif'],
				merriweather: ['Merriweather', 'serif']
			}
		}
	},
	plugins: []
} satisfies Config;
