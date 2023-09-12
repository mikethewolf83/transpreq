import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default',
      component: () => import('../views/DefaultView.vue')
    },
    {
      path: '/requests',
      name: 'requests',
      component: () => import('../views/RequestsView.vue'),
    },
    {
      path: '/requests/add',
      name: 'addRequest',
      component: () => import('../views/AddRequestView.vue'),
    }
  ]
})

export default router
