console.log('hello,world!!!')

document.addEventListener('DOMContentLoaded', () => {
  // web consoleでappをいじくれるようにする
  window.app = new Vue({
    el: '#app',
    data: {
      message: 'Hello,Vue.js'
    }
  })
})

