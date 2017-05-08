# vue2x-demo - Vue.js 2.x 入門

## 準備

### vue.jsをダウンロードする、または読み込む

- 以下のURLで最新バージョンのvue.min.jsにリダイレクトされる
- このままのパスで読み込むかダンロードしてローカルパスを指定する

    [https://npmcdn.com/vue/dist/vue.min.js](https://npmcdn.com/vue/dist/vue.min.js)

```
<script src="vue.min.js"></script>
```


### 開発JavaScript

- ここではファイル名をscript.jsとする
- HTMLファイルと同階層に配置する

```
<script src="script.js"></script>
```


### HTML

```
<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="utf-8">
    </head>
    <body>

        <!--ここにHTMLを記載する-->

        <script src="vue.min.js"></script>
        <script src="script.js"></script>
    </body>
</html>```

## Vue → HTML ： VueからHTMLに文字列を出力する

- ```new Vue({});```によってVueオブジェクトを定義、スタンバイする
- ```el```オプションでコンポーネントのセレクタを指定する
- ```data```オプションに値を設定する
- Vue.jsではデータ埋め込みにテンプレートエンジンMustacheの記法```{{hoge}}```が利用できる
- 埋込部分を要素によってラッピングできる場合は```v-text```ディレクティブも利用できる
- レッスンの都合上ここではコンポーネント名を表すセレクタ名にあえて連番を使用する

### JavaScript

```
new Vue({
  el: '.js-component01',
  data: {
    text: 'テキストテキストテキスト'
  }
});
```

### HTML

```
<div class="js-component01">
    <p>mustache構文の出力を表示します ： {{ text }}</p>
    <p>v-textの出力を表示します ： <span v-text="text"></span></p>
</div>
```

### 出力結果

> mustache構文の出力を表示します ： テキストテキストテキスト  
> v-textの出力を表示します ： テキストテキストテキスト


## HTML → Vue ： HTMLからVueに文字列を渡す

- ```v-model```ディレクティブを付与したHTMLの一部がVueオブジェクトと同期する
- テキストを入力すると値がVueオブジェクトに渡る

### JavaScript

```
new Vue({
  el: '.js-component02',
  data: {
    text: ''
  }
});
```

### HTML

```
<div class="js-component02">
    <p><input v-model="text" type="text"></p>
    <p>ここに入力文字列を表示します ： {{ text }}</p>
</div>
```

### 出力結果

> ```テキストテキスト```  
> ここに入力文字列を表示します ： テキストテキスト



## イベントを設定する ： v-on

- ```v-on```ディレクティブでは```v-on:click=""```のようにイベントを設定できる
- ```methods ```オプションに関数を格納する

### JavaScript

```
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
```

### HTML

```
<div class="js-component03">
    <p><input v-model="input" type="text"></p>
    <p v-on:click="output">入力文字列を反映</p>
    <p>ここに入力文字列を表示します ： {{ text }}</p>
</div>
```

### 出力結果

> ```テキストテキストテキスト```  
> ```入力文字列を反映```  
> ここに入力文字列を表示します ： テキストテキスト



## HTML要素を出力する ： v-html

- 値に含まれるHTMLをレンダリングして出力する場合は```v-html```ディレクティブを利用する

### JavaScript

```
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
```

### HTML

```
<div class="js-component04">
    <p class="mb10"><input v-model="input" type="text"></p>
    <p v-on:click="output" class="button mb10">入力文字列を反映</p>
    <div>ここにHTMLコードを表示します ： {{ html }}</div>
    <div>ここにHTML出力を表示します ： <span v-html="html"></span></div>
</div>
```

### 出力結果

> ```テキストテキスト```  
> ```入力文字列を反映```  
> ここにHTMLコードを表示します ： \<span style="color: #fc0;"\>テキストテキスト\</span\>  
> ここにHTML出力を表示します ： <span style="color: #fc0;">テキストテキスト</span>



## JavaScript式を経由して出力する

- Mustacheの記法```{{hoge}}```の値にJavaScript式を直接設定できる

### JavaScript

```
new Vue({
  el: '.js-component05',
  data: {
    number: ''
  }
});
```

### HTML

```
<div class="js-component05">
    <p><input v-model="number" type="number"></p>
    <p>ここに2倍の数字を表示します ： {{ number * 2 }}</p>
</div>
```

### 出力結果

> ```12```  
> ここに2倍の数字を表示します ： 24



## フィルタを経由して出力する

- ```filters ```オプションにfilter系の処理を集約できる

### JavaScript

```
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
```

### HTML

```
<div class="js-component06">
    <p><input v-model="text" type="text"></p>
    <p>ここに入力文字列の大文字を表示します ： {{ text | toUpperCase }}</p>
</div>
```

### 出力結果

> ```textTexttext```  
> ここに入力文字列の大文字を表示します ： TEXTTEXTTEXT



## computedを活用して入出力する

- 多彩な処理を扱い結果を得る場合には```computed```オプションを利用する

### JavaScript

```
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
```

### HTML

```
<div class="js-component07">
    <p><input v-model="number" type="number"></p>
    <p>ここに3倍の数字を表示します ： {{ calc3Times }}</p>
</div>
```

### 出力結果

> ```12```  
> ここに3倍の数字を表示します ： 36



## computedのget、setを活用して入出力する

- ```computed```オプションのget、setによりGetter、Setterの実装ができる

### JavaScript

```
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
```

### HTML

```
<div class="js-component08">
    <p>税抜価格 ： <input v-model="origin" type="number"></p>
    <p>税込価格 ： <input v-model="withTax" type="number"></p>
</div>
```

### 出力結果

> 税抜価格 ： ```1000```  
> 税込価格 ： ```1080```



## v-bind:classを利用してclassを切り替える

- HTMLの各要素をバインドするには```v-bind```ディレクティブを利用する
- ```v-bind```ディレクティブのclass属性によりclassを操作できる

### JavaScript

```
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
```

### HTML

```
<div class="js-component09">
    <p v-on:click="toggleClass">classを切り替え</p>
    <p>ターゲット → <span v-bind:class="{'isShow': isShow, 'isHide': isHide}">表示非表示が切り替わります</span></p>
</div>
```

### CSS

```
.isShow {display: inline;}
.isHide {display: none;}
```

### 出力結果

> ```classを切り替え```  
> ターゲット → 表示非表示が切り替わります



## v-if、v-elseを利用する

- 条件分岐を実装するには```v-if```ディレクティブ、```v-else ```ディレクティブを利用する
- ```v-model```ディレクティブはチェックボックスやラジオボタンのstate取得にも利用できる
- インスタンス生成後に呼び出したい処理はcreatedフックに記載する

### JavaScript

```
new Vue({
  el: '.js-component10',
  data: {
    isChecked: true
  },
  created: function () {
    this.flag = true;
  }
});
```

### HTML

```
<div class="js-component10">
    <p><input type="checkbox" v-model="isChecked" id="cb001"><label for="cb001"> 税込み／税抜き</label></p>
    <p v-if="isChecked">税込み （例 ： 1,080円）</p>
    <p v-else>税抜き （例 ： 1,000円）</p>
</div>
```

### 出力結果

> [x] 税込み／税抜き  
> 税込み （例 ： 1,080円）



## v-forを利用する

- ```v-for```ディレクティブによりループ処理が実装できる

### JavaScript

```
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
```

### HTML

```
<div class="js-component11">
    <ul>
        <li v-for="(item, index) in data">
            {{ index + 1 }} - {{ item }}
        </li>
    </ul>
</div>
```

### 出力結果

> 1 - hoge  
> 2 - huga  
> 3 - piyo  
> 4 - punyo



## component定義

- ```Vue.component```APIによりコンポーネント定義を実装する
- ``template```要素を配置してtemplate機能を利用することができる

### JavaScript

```
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
```

### HTML

```
<template id="js-template-component12">
    <ul>
        <li v-for="(item, index) in data.split(',')">
            {{ index + 1 }} - {{ item }}
        </li>
    </ul>
    <p>{{ text }}</p>
</template>

<div class="js-component12">
    <component12 data="hoge, huga, piyo, punyo"></component12>
</div>
```

### 出力結果

> 1 - hoge  
> 2 - huga  
> 3 - piyo  
> 4 - punyo

