import { createApp } from 'vue';
import App from './App.vue';
import Harlem from '@harlem/core';

const app = createApp(App);

app.use(Harlem);

app.mount('#app');
