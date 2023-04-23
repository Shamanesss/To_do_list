import { createRouter, createWebHistory } from 'vue-router'
import TarjetasPersonalview from '../views/TarjetasPersonalview.vue'
const routes = [
  {
    path: '/',
    name: 'profesional',
    component: TarjetasPersonalview
  },
  {
    path: '/personal',
    name: 'personal',
    component: () => import('../views/TarjetasProfesionalview.vue')
  }
 
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
