import { createRouter, createWebHistory } from 'vue-router'
import QuizesView from '../views/QuizeesView.vue'
import QuizeView from '../views/QuizView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.Base_URL),
  routes: [
    {
      path: '/',
      name: 'quizes',
      component: QuizesView,
    },
    {
      path: '/quiz/:id',
      name: 'quize',
      component: QuizeView,

    }
  ],


})
export default router