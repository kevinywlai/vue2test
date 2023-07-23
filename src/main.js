import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from "vue-router";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

const Home = { template: '<div>Welcome to Choppy’s</div>' }
const Menu = { template: '<div>Today we have cookies</div>' }
const Bar = { template: '<div>We serve cocktails</div>' }
const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/menu', component: Menu },
    { path: '/bar', component: Bar }
  ]
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
