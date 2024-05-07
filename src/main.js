import { createApp } from 'vue';
import router from './routes';
import '../output.css';
import App from './App.vue'; 


createApp(App).use(router).mount('#app');