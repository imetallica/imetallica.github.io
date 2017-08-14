import Vue from "vue"
import VueRouter from "vue-router"
import VueMarkdown from "vue-markdown"
import VueResource from "vue-resource"
import "vueify/lib/insert-css"

import Navbar from "./components/navbar.vue"
import Twitter from "./components/twitter.vue"

import Index from "./pages/index.vue"
import Elixir from "./pages/elixir.vue"
import Microservices from "./pages/microservices.vue"
import Post from "./pages/post.vue"


Vue.use(VueRouter)

const routes = [
  { path: "/", component: Index, name: "index" },
  //{ path: "/posts/elixir", component: Elixir, name: "elixir" },
  { path: "/posts/microservices", component: Microservices, name: "microservices" },
  { path: "/posts/machine-learning", component: Microservices, name: "machine-learning" },
  { path: "/posts/deep-learning", component: Microservices, name: "deep-learning" },
  { path: "/post/:language/:slug", component: Post, name: "post" }
]

const router = new VueRouter({
  routes: routes
})

const app = new Vue({
  el: "#my-app",
  router: router
})

export default app