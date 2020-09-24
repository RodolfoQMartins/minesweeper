<template>
  <div id="app">
    <Minesweeper />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Minesweeper from './components/Minesweeper.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Minesweeper
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
