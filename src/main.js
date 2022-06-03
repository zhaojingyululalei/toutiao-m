import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.less'
// 导入vant
import Vant from 'vant'
import 'vant/lib/index.css'
// 导入适配
import 'amfe-flexible'
Vue.config.productionTip = false

Vue.use(Vant)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
