import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Problems from '@/components/Problems'
import Editor from '@/components/Editor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/problems',
      name: 'problems',
      component: Problems
    },
    {
      path: '/editor',
      name: 'editor',
      component: Editor
    }
  ]
})
