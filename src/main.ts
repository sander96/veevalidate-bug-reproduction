import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {configure} from "vee-validate";

configure({
  validateOnModelUpdate: false,
  validateOnBlur: false
})

createApp(App).mount('#app')
