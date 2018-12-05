import Vue from 'vue/dist/vue.js'

import theHeader from '../components/partials/TheHeader.vue'
import theFooter from '../components/partials/TheFooter.vue'
import testTest from '../views/test/Test.vue'

import TurbolinksAdapter from 'vue-turbolinks'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  const el = document.getElementById('body')

  if (el != null) {
    const app = new Vue({
      el,
      components: {
        App,
        theHeader,
        theFooter,
        testTest
      }
    })
  }
})
