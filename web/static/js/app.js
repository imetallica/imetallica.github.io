import Vue from "vue"
import VueRouter from "vue-router"
import "vueify/lib/insert-css"

import Index from "./pages/index.vue"

Vue.use(VueRouter)

const routes = [
  { path: "/", component: Index, name: "index" }
]

const router = new VueRouter({
  routes: routes
})

const app = new Vue({
  el: "#app",
  router: router
})

export default app