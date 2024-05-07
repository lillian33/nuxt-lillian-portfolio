import { defineConfig } from "unocss";
import presetUno from "@unocss/preset-uno";
import presetRemToPx from "@unocss/preset-rem-to-px";
import transformerDirectives from "@unocss/transformer-directives";
import presetWebFonts from "@unocss/preset-web-fonts";
import presetIcons from "@unocss/preset-icons/browser";

// loader helpers
import { FileSystemIconLoader } from "@iconify/utils/lib/loader/node-loaders";

export default defineConfig({
	// ...UnoCSS options
	presets: [
		presetUno(),
		presetRemToPx({
			baseFontSize: 4,
		}),
		presetWebFonts({
			/* options */
		}),
		presetIcons({
			extraProperties: {
				display: "inline-block",
				"vertical-align": "middle",
			},
			collections: {
				custom: FileSystemIconLoader("./assets/icons"),
			},
		}),
	],
	transformers: [transformerDirectives()],
	shortcuts: {
		"ul-list": "list-none pl-0 m-0",
		container: "w-45% mx-auto",
	},
	theme: {
		color: {
			primary: "#161C27",

			white: "#ffffff",
		},
		breakpoints: {
			sm: "320px",
			md: "640px",
			lg: "960px",
			xl: "1440px",
			"2xl": "1920px",
		},
	},
});
