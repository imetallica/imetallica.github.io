<template>
  <div>
    <Navbar />
    <br><br><br><br><br>

    <div class="container">
      <h5>Microserviços <small>com Python</small></h5>
      <hr />
      <p>Eles chegaram pra ficar. Eles ajudam a escalar, modernizar e agilizar o desenvolvimento de aplicações.</p>
       
      <p>
         Aqui demonstrarei como construir sistemas distribuídos, reativos, utilizando padrões reconhecidos pela 
         indústria, utilizando sua linguagem favorita: Python.
      </p>

      <br />
      <!--
      <h6>Posts</h6>
      <hr />
      <ul>
        <li v-for="post in posts" class="collection deep-purple darken-4" >
          <router-link :to="{ name: 'post', params: { language: 'elixir', slug: post.path } }" class="collection-item deep-purple-text text-darken-4"> {{post.name}} </router-link>
        </li>
      </ul>
      -->
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