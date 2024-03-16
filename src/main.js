
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
//thêm router vào ứng dụng:
createApp(App).use(router).mount("#app");