// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  nitro: {
    // preset: "cloudflare-pages-static",
    preset: "static",
  },

  modules: [
    // "@nuxtjs/color-mode", <-- try this module too
    "nuxt-security",
  ],

  security: {
    ssg: {
      meta: true,
      hashScripts: true,
      hashStyles: true,
    },
    sri: true,
  },
});
