import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/message/:id',
    component: () => import('../views/ViewMessage.vue')
  },
  {
    path: '/login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/kelas',
    component: () => import('../views/dokter.vue')
  },
  {
    path: '/kelas/:id',
    component: () => import('../views/viewdokter.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
