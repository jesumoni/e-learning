import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CoursesView from '@/views/CoursesView.vue'
import AboutusView from '@/views/AboutusView.vue'
import PricingView from '@/views/PricingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"HomeView",
      component:HomeView
    },
    {
      path:"/courses",
      name:"Courses",
      component:CoursesView
    },
    {
      path:"/about",
      name:"About",
      component:AboutusView
    },
    {
      path:"/pricing",
      name:"Pricing",
      component:PricingView
    }
  ],
})

export default router
