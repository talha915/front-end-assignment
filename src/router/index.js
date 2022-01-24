import Vue from 'vue'
import VueRouter from 'vue-router'
import Fruits from '../views/Fruits.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Fruits',
    component: Fruits
  }
]

const router = new VueRouter({
  routes
})

export default router
