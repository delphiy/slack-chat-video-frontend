import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/styles.css'

import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

import router from './router/router'

//Google Auth
import GoogleAuth from './services/GoogleAuthService'
const googleAuthOptions = {
  clientId: '911257406250-hha17g058pj45qaiig0h82btrf422fic.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}

//ApiService
import ApiService from './services/ApiService'
Vue.prototype.$apiService = new ApiService();

//Pusher
import Echo from 'laravel-echo'
window.Pusher = require('pusher-js')
window.Echo = new Echo({
  broadcaster: 'pusher',
  key: '29fc1681f02b6e7734ca',
  cluster: 'eu',
  authEndpoint: 'http://localhost:8003/broadcasting/auth?api_token=' + localStorage.getItem('api_token'),
  encrypted: true
})

Vue.use(GoogleAuth, googleAuthOptions)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueQuillEditor)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
