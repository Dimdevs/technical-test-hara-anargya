import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/HomeView.vue';
import About from './views/AboutView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { 
      title: 'Home', 
      description: 'Home',
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { 
      title: 'About', 
      description: 'About',
    }
  },  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;