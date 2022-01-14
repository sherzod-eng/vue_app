import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = "https://gorest.co.in/public/v1"

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
