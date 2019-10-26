import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
     ** Headers of the page
     */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
     ** Customize the progress-bar color
     */
  loading: { color: '#fff' },
  /*
     ** Global CSS
     */
  css: [],
  /*
     * https://nuxtjs.org/api/configuration-watch
     */
  watch: [
    '~/vuex/**/*.js',
    '~/mixins/**/*.js'
  ],
  /*
     ** Plugins to load before mounting the App
     */
  plugins: [
    '~/plugins/component-register',
    { src: '@/plugins/chart', ssr: false }
  ],
  /*
     ** Nuxt.js dev-modules
     */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
     ** Nuxt.js modules
     */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth'
  ],
  auth: {

  },
  /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
  axios: {},
  /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      light: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
     ** Build configuration
     */
  build: {
    /*
         ** You can extend webpack config here
         */
    extend (config, ctx) {}
  },
  env: {
    BASE_API_URL: 'http://localhost:8080/api'
  }
}
