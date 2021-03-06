import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Detail from '@/components/Detail'

Vue.use(Router)

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          selector: '#app',
          offset: { x: 0, y: 0 }
        })
      }, 500)
    })
  }
}

export default new Router({
  scrollBehavior,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/bid/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
