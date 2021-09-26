import Vue from 'vue'
import App from './App.vue'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-ui/lib/theme-chalk/index.css'


const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
