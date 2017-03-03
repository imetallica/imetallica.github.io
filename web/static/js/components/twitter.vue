<template>
  <div>
    <a id="twitter-container" 
       class="twitter-timeline" 
       data-lang="pt" 
       data-theme="light" 
       data-link-color="#311B92" 
       href="https://twitter.com/machadoiuri">
      <div class="progress deep-purple lighten-4">
        <div class="indeterminate deep-purple darken-4"></div>
      </div>  
    </a>
  </div>
</template>

<script>
import Vue from "vue"

const twitter = {
  mounted: function() {
    if (window.twttr) {
      window.twttr.widgets.load(
        document.getElementById("twitter-container")
      )
    } else {
      console.log("No twitter yet")
    }
  }
}

const Twitter = Vue.component("twitter", twitter)

export default Twitter
</script>