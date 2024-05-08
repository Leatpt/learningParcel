import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue';
// import About from '../views/About.vue';
// import Contact from '../views/Contact.vue';

const Home = () => import('../views/Home.vue');
const About = () => import('../views/About.vue');
const Contact = () => import('../views/Contact.vue');
const NotFound = () => import('../views/NotFound.vue');

const routes = [
    { path: "/", name: 'Home', component: Home},
    { path: "/about", name: 'About', component: About},
    { path: "/contact", name: 'Contact', component: Contact},
    { path: "/:pathMatch(.*)*", name: 'NotFound', component: NotFound}
];

const router = createRouter ({
    history: createWebHistory(),
    routes,
});

export default router;