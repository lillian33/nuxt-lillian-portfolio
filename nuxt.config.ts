// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	app: {
		baseURL: "/portfolio/",
		buildAssetsDir: "assets/",
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/scss/variables.scss" as *;',
				},
			},
		},
	},
	css: ["~/assets/scss/main.scss"],
	modules: ["@unocss/nuxt"],
});
