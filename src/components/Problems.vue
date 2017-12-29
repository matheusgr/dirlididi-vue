<template>
  <div class="problems">
    <table class="table table-hover table-bordered table-condensed">
      <thead>
          <tr>
              <th>Problem</th>
              <th>Description</th>
              <th>Key</th>
              <th>Created</th>
              <th><center>Solved</center></th>
          </tr>
      </thead>
      <tbody v-bind:key=problem.key v-for="problem in problems">
          <tr click.trigger="showProblem(problem)" style="cursor: pointer">
              <td><a href="#">{{problem.name}}</a></td>
              <td><a href="#">{{shortDescription(problem)}}</a></td>
              <td><a href="#">{{problem.key}</a></td>
              <td>{{problem.date}}</td>
              <td><center>
                  <div v-if="solved.hasOwnProperty(problem.key)">
                      <span v-if="solved[problem.key]">&#10004;</span>
                      <span v-if="!solved[problem.key]">&#10008;</span>
                  </div>
                  </center>
              </td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      problems: []
    }
  },

  created () {
    axios.get(`http://localhost:8080/api/problems`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.problems = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
