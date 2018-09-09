console.log('hello,world!!!')

document.addEventListener('DOMContentLoaded', () => {
  // web consoleでappをいじくれるようにする
  window.app = new Vue({
    el: '#app',
    data: {
      list: ['Java', 'Ruby', 'Python'],
      message: 'Hello,Vue.js',
      show: true,
      count: 0,
      isChild: true,
      isActive: true,
      textColor: 'res',
      bgColor: 'lightGray',
      radius: 50
    },
    methods: {
      handleClick: function (e) {
        alert(e.target)
      },
      increment: function () {
        this.count++;
      }
    }
  })
})

