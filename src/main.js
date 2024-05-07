import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import '../output.css';
import App from './App.vue'; 
import Home from './views/Home.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';

const routes = [
    { path: '/', component: Home},
    { path: '/about', component: About},
    { path: '/contact', component: Contact}
];

const router = createRouter ({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).mount('#app');