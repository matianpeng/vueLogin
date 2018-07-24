// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import * as api from './fetch/api'
import vfilter from "./filter/vfilter";//引入过滤器
Vue.config.productionTip = false
global.api=api;
/* eslint-disable no-new */
//全局注入过滤器
for (let key in vfilter){
  Vue.filter(key,vfilter[key])
}
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
