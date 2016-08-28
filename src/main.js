import Vue from 'vue'
import App from './App'
import vueTap from 'vue-gesture'

Vue.use(vueTap)
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
