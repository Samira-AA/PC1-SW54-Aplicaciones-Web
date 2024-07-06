import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Rating from 'primevue/rating';
import 'primevue/resources/themes/soho-light/theme.css'

createApp(App)
    .component('pv-card', Card)
    .component('pv-button',Button)
    .component('pv-toolbar',Toolbar)
    .component('pv-rating', Rating)
    .use(PrimeVue)
    .mount('#app')
