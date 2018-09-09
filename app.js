console.log('hello,world!!!')

document.addEventListener('DOMContentLoaded', () => {
  // web consoleでappをいじくれるようにする
  window.app = new Vue({
    el: '#app',
    data: {
      list: ['Java', 'Ruby', 'Python'],
      message: 'Hello,Vue.js',
      show: true
    },
    methods: {
      handleClick: function (e) {
        alert(e.target)
      }
    }
  })
})

