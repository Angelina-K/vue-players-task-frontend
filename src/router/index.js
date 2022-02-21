import Vue from 'vue';
import VueRouter from 'vue-router';
import mainContent from '../views/Main-content.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main-content',
    component: mainContent,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
