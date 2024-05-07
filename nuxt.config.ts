// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	app: {
		baseURL: "/portfolio/",
		buildAssetsDir: "/assets/",
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
	supabase: {
		redirect: true,
		redirectOptions: {
			login: "/login",
			callback: "/confirm",
			include: undefined,
			exclude: ["/", "/project", "/about", "/resume", "/contact"],
			cookieRedirect: false,
		},
	},
	css: ["~/assets/scss/main.scss"],
	modules: ["@unocss/nuxt", "@nuxtjs/supabase"],
});
