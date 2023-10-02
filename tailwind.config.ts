import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			hoid: "#F7F8F8",
			nightblood: "#010202",
			vasher: "#5E5E5E",
			lightsong: "#CFC2C4",
			vivenna: "#EE376B",
			siri: "#EE265B",
		},
		extend: {
			animation: {
				"pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
			},
		},
	},
	plugins: [],
};
export default config;
