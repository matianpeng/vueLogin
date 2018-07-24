import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login/Login'
import List from '@/pages/List/List.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/List',
      name: 'List',
      component: List
    , props: true
}
  ]
})
