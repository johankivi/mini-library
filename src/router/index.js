import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/books',
    name: 'Books',
    component: () => import('../views/Books.vue')
  },
  {
    path: '/books/:id',
    name: 'bookInfo',
    component: () => import('../views/BookInfo.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
