import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from '@/App.vue'
import '@/styles/index.scss'
import globalComponent from '@/components';
import'virtual:svg-icons-register'
import router from './router'
import pinia from './store'

const app = createApp(App)

app.use(ElementPlus,{locale: zhCn,})

app.use(globalComponent)

app.use(router)

app.use(pinia)

app.mount('#app')
