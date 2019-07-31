import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入iconfont
import '@/assets/iconfont.css'
// 引入api
import api from './api'

// 将api挂载到vue原型上
Vue.prototype.$api = api
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
