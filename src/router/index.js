import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children:[
        {
          path: 'List',
          name: 'List',
          component: () => import( /* webpackChunkName: "List" */ '.components/List.vue')
        }, {
          path: 'User',
          name: 'User',
          component: () => import( /* webpackChunkName: "User" */ '.components/User.vue')
        },
      ]
    }
  ]
})
