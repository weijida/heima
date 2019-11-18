import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home/index.vue'完整路径
import Home from '../views/Home'
// 简写路径前提必须是index文件
import login from '../views/login'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },

  // 登录页的一级路由
  {
    path: '/login',
    component: login
  },
  // 主页一级路由
  {
    path: '/home',
    name: 'home',
    component: Home
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
