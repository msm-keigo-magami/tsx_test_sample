# TSX_TEST_SAMPLE

## 目的
react×typescript×jestにおけるtsxに対するテストコードの検証実施

## 構成
基本的にsrcディレクトリ配下にts・tsxファイルを格納している。（基本的に`create-react-app`からそこまで構成を変えていない）
以下、ディレクトリの説明
- components: 各種コンポーネントを格納
- tests: テストコードを格納。当ディレクトリ以外にテストコードを格納しても、`npm test`では実行されない

## テスト実行方法
rootディレクトリで`npm test`を実行
また、vscodeのjestプラグインをインストールすれば、GUI上での個別のテストコードを実行することができる

## 参考資料
https://qiita.com/ossan-engineer/items/4757d7457fafd44d2d2f
https://zenn.dev/iamtillmans/articles/171f41fbd03c89#react-testing-library
https://qiita.com/mangano-ito/items/99dedf88d972e7e631b7


## 余談
eslintのrulesに`testing-library`用の設定を追加するのに地味に時間を使った。
無視しようかと思ったが、`testing-library/no-debugging-utils: off`に設定しないと`screen.debug()`でlint errorがでてしまうので設定した。