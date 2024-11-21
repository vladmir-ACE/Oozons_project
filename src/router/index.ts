import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import App from '@/App.vue'
import ContactView from '@/views/ContactView.vue'
import AboutView from '../views/AboutView.vue'
import FirstComponent from '@/components/FirstComponent.vue'
import ArticleView from '@/views/article/ArticleView.vue'
import ListeArticleView from '@/views/article/ListeArticleView.vue'
import AddArticleview from '@/views/article/AddArticleview.vue'
import Article2View from '@/views/article2/Article2View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FirstComponent,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/article',
      name: 'article',
      component: ArticleView,
      children: [
        {
          path: 'list',
          component: ListeArticleView,
        },
        {
          path: 'add',
          component: AddArticleview,
        },
      ],
    },
    {
      path: '/crud-article',
      name: 'article',
      component: Article2View,
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
