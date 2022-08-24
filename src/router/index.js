import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入需要的组件
import Home from '@/views/Home/Home.vue'
import User from '@/views/User/User.vue'

// 把 VueRouter 安装为 Vue 的插件
Vue.use(VueRouter)

// 路由规则的数组
const routes = [
  // 重定向
  { path: '/', redirect: '/home' },
  // 定义首页的路由规则
  {
    path: '/home',
    component: Home,
    meta: { isRecord: true, top: 0 }
  },
  // 定义我的的路由规则
  {
    path: '/user',
    component: User
  }
]

// 创建路由实例对象
const router = new VueRouter({
  routes: routes, // 也可以简写为routes
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个位置
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: to.meta.top || 0 }
    }
  }
})

export default router
