import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './plugins/element.js'
// 导入字体图标
import './assets/fonts/iconfont.css'

// 导出全局样式
import './assets/css/global.css'

import axions from 'axios'
// 配置请求根路径
Vue.prototype.$http = axions
axions.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
