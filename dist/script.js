{


// Vue → HTML
new Vue({
  el: '.js-component01',
  data: {
    text: 'テキストテキストテキスト'
  }
});


// HTML → Vue
new Vue({
  el: '.js-component02',
  data: {
    text: ''
  }
});


// イベント
new Vue({
  el: '.js-component03',
  data: {
    input: '',
    text: ''
  },
  methods: {
    output: function () {
      this.text = this.input;
    }
  }
});


// HTML要素
new Vue({
  el: '.js-component04',
  data: {
    input: '',
    html: ''
  },
  methods: {
    output: function () {
      this.html = '<span style="color: #fc0;">' + this.input + '</span>';
    }
  }
});


// JavaScript式
new Vue({
  el: '.js-component05',
  data: {
    number: ''
  }
});


// フィルタ
new Vue({
  el: '.js-component06',
  data: {
    text: ''
  },
  filters: {
    toUpperCase: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.toUpperCase()
    }
  }
});


// computed
new Vue({
  el: '.js-component07',
  data: {
    number: '0'
  },
  computed: {
    calc3Times: function () {
      return this.number * 3;
    }
  }
});


// computed
new Vue({
  el: '.js-component08',
  data: {
    origin: '100'
  },
  computed: {
    withTax: {
      get: function () {
        return parseInt(this.origin * 1.08)
      },
      set: function (value) {
        this.origin = Math.ceil(value / 1.08);
      }
    }
  }
});


// v-bind:class
new Vue({
  el: '.js-component09',
  data: {
    isShow: true,
    isHide: false
  },
  methods: {
    toggleClass: function () {
      this.isShow = !this.isShow;
      this.isHide = !this.isHide;
    }
  }
});


// v-if、v-else
new Vue({
  el: '.js-component10',
  data: {
    isChecked: true
  },
  created: function () {
    this.flag = true;
  }
});


// v-for
new Vue({
  el: '.js-component11',
  data: {
    data: [
      'hoge',
      'huga',
      'piyo',
      'punyo'
    ]
  },
  created: function () {
    this.flag = true;
  }
});


// component
Vue.component ('component12', {
  props: ['data'],
  template: '#js-template-component12'
});
new Vue({
  el: '.js-component12',
  data: {
    data: []
  }
});






























}