<template>
  <div id="app">
    <menu-dirlididi/>
    <router-view/>
  </div>
</template>

<script>
import MenuDirlididi from './components/MenuDirlididi.vue'

export default {
  components: {
    'menu-dirlididi': MenuDirlididi
  },
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
