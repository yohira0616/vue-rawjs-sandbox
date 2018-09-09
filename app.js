console.log('hello,world!!!')
import _ from 'lodash'

Vue.component('fruit', {
  template: '<li>{{name}} {{price}} 円</li>',
  props: {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  }
})

Vue.component('comp-child', {
  template: '<button @click="handleClick">イベント発火</button>',
  methods: {
    handleClick: function () {
      this.$emit('childs-event')
    }
  }
})


document.addEventListener('DOMContentLoaded', () => {
  // web consoleでappをいじくれるようにする
  window.app = new Vue({
    el: '#app',
    methods: {
      parentsMethod: function () {
        alert('event fired!')
      }
    }
  })
})

