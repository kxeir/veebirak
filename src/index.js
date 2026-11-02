import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';

import ToDo from './pages/todo.vue';
import Modals from './pages/modals.vue';
import Buttons from './pages/buttons.vue';
import Messages from './pages/messages.vue';
import './style.scss';

const routes = [
  { path: '/', component: ToDo, name: 'ToDo'},
  { path: '/modals', component: Modals, name: 'Modals'},
  { path: '/buttons', component: Buttons, name: 'Buttons'},
  { path: '/messages', component: Messages, name: 'Messages'},
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

import App from './app.vue';

const app = createApp(App);
app.use(router);
app.mount('#app');
