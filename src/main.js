import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入Vant组件库
import Vant, { Lazyload } from 'vant'
import 'vant/lib/index.less'
// import 'vant/lib/index.css'

Vue.use(Vant)
// 添加懒加载
Vue.use(Lazyload)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
