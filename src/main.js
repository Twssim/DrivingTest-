import Vue from 'vue'
import App from './App.vue'
import router from './router'
import less from 'less'
import VueAxios from 'vue-axios'
import axios from 'axios'
import Vantconfig from './vantConfig'
import 'lib-flexible'
 
Vue.use(less)
Vue.use(Vantconfig)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
