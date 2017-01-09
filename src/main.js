// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Apart from './components/Apart'
import Bpart from './components/Bpart'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Error = {template: '<p style="color: red">is Error!!</p>'}
const routes = [
  {
    path: '/',
    component: Apart
  },
  {
    path: '/bb',
    component: Bpart
  },
  {
    path: '*',
    component: Error
  }
]

const router = new VueRouter({routes})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
