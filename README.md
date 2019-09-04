# HelloTypeScript

## 導入
- TypeScriptコンパイラのインストール
    - sudo npm install -g typescript

- コンパイル
    - tsc [ファイル名.ts]

- 実行
    - node [ファイル名.js]

## 開発環境の構築
#### プロジェクトフォルダの作成
```コマンドプロンプト
mkdir ~(ts_tutorialとか)
cd ~
(sudo) npm init --y
```

#### Webpackなどのインストール
```コマンドプロンプト
(sudo) npm install typescript ts-loader webpack webpack-cli webpack-dev-server --save-dev
```

#### 設定ファイルの準備1
package.jsonのscriptsの項目を修正
```package.json
{
  "name": "ts_tutorial",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack --mode=development",
    "start": "webpack-dev-server --mode=development"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "ts-loader": "^4.0.0",
    "typescript": "^2.7.2",
    "webpack": "^4.0.1",
    "webpack-cli": "^2.0.10",
    "webpack-dev-server": "^3.1.0"
  }
}
```
scriptsの内容は以下の通り
- "npm start"コマンドで、webpack-dev-serverを起動するようにする。
- "npm run build"コマンドで、Webpackのビルド処理を起動するようにする。

#### 設定ファイルの準備2
webpack.config.jsを作成
```webpack.config.js
const path = require('path');
module.exports = {
    // モジュールバンドルを行う起点となるファイルの指定
    // 指定できる値としては、ファイル名の文字列や、それを並べた配列やオブジェクト
    // 下記はオブジェクトとして指定した例 
    entry: {
        bundle: './src/app.ts'
    },  
    output: {
        // モジュールバンドルを行った結果を出力する場所やファイル名の指定
        // "__dirname"はこのファイルが存在するディレクトリを表すnode.jsで定義済みの定数
        path: path.join(__dirname,'dist'),
        filename: '[name].js'  // [name]はentryで記述した名前(この例ではbundle）が入る
    },
    // モジュールとして扱いたいファイルの拡張子を指定する
    // 例えば「import Foo from './foo'」という記述に対して"foo.ts"という名前のファイルをモジュールとして探す
    // デフォルトは['.js', '.json']
    resolve: {
        extensions:['.ts','.js']
    },
    devServer: {
        // webpack-dev-serverの公開フォルダ
        contentBase: path.join(__dirname,'dist')
    },
    // モジュールに適用するルールの設定（ここではローダーの設定を行う事が多い）
    module: {
        rules: [
            {
                // 拡張子が.tsで終わるファイルに対して、TypeScriptコンパイラを適用する
                test:/\.ts$/,loader:'ts-loader'
            }
        ]
    }
}
```

#### 設定ファイルの準備3
以下を実行してtsconfig.jsonを生成
```コマンドプロンプト
tsc --init
```

tsconfig.jsonが生成される
```tsconfig.json
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true   
    }
}
```

## TypeScriptプログラムの作成
プロジェクトフォルダ(ts_tutorial)に以下を作成
- ts_tutorial
    - dist(htmlとか)
        - htmlで読み込むjsファイル(tsファイルがコンパイルされたもの)はbundle.js
    - src(tsファイルをいれる)
    - node_modules(npmコマンドで自動生成されてるはず)

## TypeScriptプログラムの実行
コマンドプロンプトで以下を実行

```コマンドプロンプト
npm start
```

その後，http://localhost:8080にアクセス