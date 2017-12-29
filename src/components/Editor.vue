<template>
  <div class="editor">
    <span>{{problem}}</span>
    <div if.bind="!login.logged" class="alert alert-danger" role="alert">
        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
        <span class="sr-only">Alert:</span>
        You must be logged to save a problem.
    </div>
    <div if.bind="!editing">
        <div class="panel panel-default">
            <div class="panel-body">
            Creating a problem? Here are some tips:
            <ul>
                <li>Don't create inputs to test a program speed;</li>
                <li>Avoid surprises. Only test what you state on your problem;</li>
                <li>Always create at least one public test;</li>
                <li>Do problems that are fun to solve!</li>
            </ul>
            </div>
        </div>
    </div>
    <div class="panel panel-default">
        <div class="panel-heading">
            <div if.bind="!editing">
                <b>Submit a new problem...</b>
                <a click.delegate="clearProblem()" href='#'><sup>reset</sup></a>
            </div>
            <div if.bind="editing">
                <b>Editing problem...</b>
                <a click.delegate="clearProblem()" href='#'><sup>new problem</sup></a>
            </div>
        </div>
        <div class="panel-body">
            <div class="input-group">
                <span class="input-group-addon">Name</span>
                <input tabindex="1" v-model="problem.name" type="text" class="form-control" name="name" size="45" placeholder="Short name...">
            </div>
            <br>
            <div class="input-group">
                <span class="input-group-addon">Description</span>
                <textarea tabindex="1" value.bind="problem.description" name="description" class="form-control" cols=100 rows=20 placeholder="Write problem description here. You can use markdown and see the preview below."></textarea>
            </div>
            <div>
                <sup><a href="https://markdown-it.github.io/" target="_blank">markdown help [external link]</a> <a click.delegate='previewDescr()' href='#'>preview</a></sup>
            </div>
            <div class="input-group"><span class="input-group-addon">Tip</span>
                <input tabindex="1" type="text" value.bind="problem.tip" class="form-control" name="tip" size="90" placeholder="Short tip to solve this problem...">
            </div>
            <br>
            <div id="tests" repeat.for="test of problem.tests">
                <div class="test">
                    <div class="panel panel-default">
                        <div class="panel-heading"><b>Test</b></div>
                        <div class="panel-body">
                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-addon">Name</span>
                                    <input tabindex="1" value.bind="test.description" type="text" class="form-control" size="90" placeholder="Test description...">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">Tip</span>
                                    <input tabindex="1" value.bind="test.tip" type="text" class="form-control" size="90" placeholder="Tip to pass this test">
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">Input</span>
                                    <textarea tabindex="1" value.bind="test.input" class="form-control" cols=100 rows=5 placeholder="Input"></textarea>
                                </div>
                                <br>
                                <div class="input-group">
                                    <span class="input-group-addon">Output</span>
                                    <textarea tabindex="1" value.bind="test.output" class="form-control" cols=100 rows=5 placeholder="Output"></textarea>
                                </div>
                                <br>
                                <div class="checkbox">
                                    <label><input tabindex="1" checked.bind="test.publish" type="checkbox">Show input/outputs in description</label>
                                </div>
                            </div>
                            <a tabindex="1" click.delegate='removeTest($index)' href='#'>Remove</a>
                        </div>
                    </div>
                </div>
            </div>
            <a tabindex="2" click.delegate="addTest()" href='#'>Add Test</a>
            <div if.bind="login.admin" class="checkbox">
                <label><input tabindex="1" checked.bind="problem.publish" type="checkbox">Publish</label>
            </div>
        </div>
    </div>
    <button @click="postPost()" href='#'>Save Problem</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  // app initial state
  data () {
    return {
      problem: []
    }
  },

  methods: {
    postPost () {
      axios.post(`http://localhost:8080/api/problem`, {
        body: this.problem
      })
      .then(response => {})
      .catch(e => {
        console.log(e)
        this.errors.push(e)
      })
    }
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
