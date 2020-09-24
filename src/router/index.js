
import {createRouter, createWebHistory, useRoute} from 'vue-router'
import Layout from "../components/layout.vue";
import Index from "../components/index.tsx";
import User from "../components/user.vue"
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // route -> routes
    {
      path: '/',
      redirect: '/index',
      component: Layout,
      children: [
          {
              path: 'index',
              name: 'index',
              component: Index
          },
          {
              path: 'user',
              component: User,
          }
      ]
    },
   
　],
})

export default router