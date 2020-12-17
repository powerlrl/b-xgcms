import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入element

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

// 挂载全局css样式重置文件
import 'assets/styles/reset.css'
import 'assets/styles/common.css'
// 引入scss
// import '@/styles/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
