/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				orangeMain: "#fba106",
				orangeSec: "#d77210",
				white: "#FFFFFF",
				darkblue: "#151f27"
			}
		},
	},
	plugins: [],
}
