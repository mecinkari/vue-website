import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/blog/:slug',
    name: 'Singlepost',
    component: () => import('../views/Singlepost.vue')
  },
  {
    path: '/discord-server',
    name: 'DiscordServer',
    component: () => import('../views/DiscordServer.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
