<template>
  <div>
    <navbar />

    <br><br><br><br><br>

    <div class="container">
      <button @click="goBack" class="btn deep-purple darken-3">Voltar</button>
      <br /><br/>
      <div v-if="loading"></div>
      <div v-else><vue-markdown>{{content}}</vue-markdown></div>
    </div>
  </div>
</template>

<script>
  import Vue from "vue"
  import VueResource from "vue-resource"
  import VueMarkdown from "vue-markdown"

  import Navbar from "../components/navbar"

  Vue.use(VueMarkdown)
  Vue.use(VueResource)

  export default {
    data: function() {
      return {
        content: null,
        loading: true
      }
    },

    created() {
      const urlPath = "/posts/" + this.$route.params.language + "/" + this.$route.params.slug + ".md"
      this.$http.get(urlPath)
        .then((response) => {
          this.content = response.body
          this.loading = false
        })
    },

    methods: {
      goBack: function() {
        window.history.back()
      }
    },

    components: {
      Navbar, VueMarkdown
    }
  }

</script>