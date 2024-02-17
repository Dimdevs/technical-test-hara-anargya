import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/HomeView.vue';
import Overview from './views/OverView.vue';

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
    path: '/overview',
    name: 'Overview',
    component: Overview,
    meta: { 
      title: 'Overview', 
      description: 'Overview',
    }
  },  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;