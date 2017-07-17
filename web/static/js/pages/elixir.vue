<template>
  <div>
    <Navbar />
    <br><br><br><br><br>

    <div class="container">
       <h5>Elixir <small>101</small></h5>
       <hr />
       <p>Olá, seja bem vindo ao cantinho que dedico a escrever sobre tudo que já aprendi de Elixir durante
          esses anos.</p>
       
       <p>Aqui você encontrará um tutorial para começar a sua trajetória de desenvolvimento de aplicações 
          tolerantes à falhas, escaláveis e em tempo real, bem como poderá avaliar se Elixir é uma excelente
          opção para o seu próximo projeto.</p>

      <br />
      <h6>Posts</h6>
      <hr />
      <ul>
        <li v-for="post in posts" class="collection deep-purple darken-4" >
          <router-link :to="{ name: 'post', params: { language: 'elixir', slug: post.path } }" class="collection-item deep-purple-text text-darken-4"> {{post.name}} </router-link>
        </li>
      </ul>
    </div>
   
  </div>
</template>
<script>
  import Navbar from "../components/navbar.vue"

  export default {
    data: function() {
      return {
        posts: [
          { name: "[001] Introdução", path: "001-intro" }
        ]
      }
    },

    components: {
      Navbar
    }
  }
</script>