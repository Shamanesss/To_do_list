import { createRouter, createWebHistory } from 'vue-router'
import TarjetaProfesionalview from '../views/TarjetasProfesionalview.vue'

const routes = [
  {
    path: '/',
    name: 'profesional',
    component: TarjetaProfesionalview
  },
  {
    path: '/personal',
    name: 'personal',
    component: () => import('../views/TarjetasPersonalview.vue')
  }
 
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
