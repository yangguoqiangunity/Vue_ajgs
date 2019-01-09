// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Axios from 'axios'


import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css'
import './assets/css/mui.css'
import './assets/css/staticmain.css'

Vue.use(MintUi);

Vue.config.productionTip = false;
//
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL="https://zuul.ajgs.cn/ajgsapp";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
