import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 路由表
const routes = [
  // 路由懒加载
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/')
  },
  {
    path: '/',
    // name: 'layout',  根路由不需要
    component: () => import('@/views/layout/'),
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('@/views/home/')
      },
      {
        path: '/qa', // 默认子路由
        name: 'qa',
        component: () => import('@/views/qa/')
      },
      {
        path: '/video', // 默认子路由
        name: 'video',
        component: () => import('@/views/video/')
      },
      {
        path: '/my', // 默认子路由
        name: 'my',
        component: () => import('@/views/my/')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
