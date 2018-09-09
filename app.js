console.log('hello,world!!!')
import _ from 'lodash'


document.addEventListener('DOMContentLoaded', () => {
  // web consoleでappをいじくれるようにする
  window.app = new Vue({
    el: '#app',
    components: {
      'my-component': {
        template: '<p>Scoped My Component</p>'
      }
    },
    data: {
      budget: 300,
      limit: 2,
      list: [
        {id: 1, name: 'りんご', price: 100},
        {id: 2, name: 'ばなな', price: 200},
        {id: 3, name: 'いちご', price: 400},
        {id: 4, name: 'おれんじ', price: 300},
        {id: 5, name: 'めろん', price: 500}
      ],
      order: false,
      price: 19800

    },
    filters: {
      localeNum: function (val) {
        return val.toLocaleString()
      }
    },
    computed: {
      matched: function () {
        return this.list.filter((el) => {
          return el.price <= this.budget
        }, this)
      },
      limited: function () {
        return this.sorted.slice(0, this.limit)
      },
      sorted: function () {
        return _.orderBy(this.matched, 'price', this.order ? 'desc' : 'asc')
      }
    }
  })
})

