console.log('hello,world!!!')

document.addEventListener('DOMContentLoaded', () => {
  // web consoleでappをいじくれるようにする
  window.app = new Vue({
    el: '#app',
    data: {
      message: 'Hello,Vue.js',
      show: true,
      count: 0,
      isChild: true,
      isActive: true,
      textColor: 'res',
      bgColor: 'lightGray',
      radius: 50,
      list: [
        {id: 1, name: 'スライム', hp: 100},
        {id: 2, name: 'ドラゴン', hp: 200},
        {id: 3, name: 'ゴブリン', hp: 500}
      ],
      name: ''
    },
    methods: {
      handleClick: function (e) {
        alert(e.target)
      },
      increment: function () {
        this.count++;
      },
      // 追加
      doAdd: function () {
        var max = this.list.reduce((a, b) => {
          return a > b.id ? a : b.id
        }, 0)
        this.list.push({
          id: max + 1,
          name: this.name,
          hp: 500
        })
        this.name = ''
      },
      doRemove: function (index) {
        this.list.splice(index, 1)
      }
    }
  })
})

