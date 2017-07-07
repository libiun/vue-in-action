import Vue from 'vue'
import Router from 'vue-router'
import NotFounded from '@/pages/404'
import Home from '@/pages/Home'
import TestPage from '@/pages/TestPage'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      component: TestPage
    },
    {
      path: '*',
      name: 'NotFounded',
      component: NotFounded
    }
  ]
})
