<template>
  <div class="navbar-fixed">
    <nav class="deep-purple darken-4 nav-extended">
      <div class="container">
        <div class="nav-wrapper">
          <router-link :to="{ name: 'index' }" class="brand-logo center" id="brand"> Iuri L. Machado </router-link>
          
        </div>
        <div class="nav-content">
          <ul class="tabs tabs-transparent center">
            <li class="tab"><router-link :to="{ name: 'index' }">Início</router-link></li>
            <li class="tab"><router-link :to="{ name: 'microservices' }">Microserviços <small>com python</small></router-link></li>
            <!--
            <li class="tab"><router-link :to="{ name: 'machine-learning' }">Machine Learning</router-link></li>
            <li class="tab"><router-link :to="{ name: 'deep-learning' }">Deep Learning</router-link></li>
            <li class="tab"><router-link :to="{ name: 'elixir' }">Elixir </router-link></li>-->
            <!--<li class="tab disabled"><a>Blog</a></li>-->
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  import Vue from "vue"
  const navbar = {

  }

  const Navbar = Vue.component('navbar', navbar)
  export default Navbar
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lobster');

#brand {
  font-family: 'Lobster', cursive;
  text-decoration: underline
}
</style>