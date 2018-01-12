<template>
    <div id="menu">
      <a v-bind:href=url>login</a>
      <router-link to="/problems">Problemas</router-link>
      <router-link to="/editor">Editor</router-link>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
      data () {
        return {'url': '#'}
      },
      created () {
        const vm = this
        axios.defaults.withCredentials = true
        axios.get(`http://localhost:8080/api/user`)
        .then(response => {
          Object.assign(vm.$data, response.data)
        })
      }
    }
</script>