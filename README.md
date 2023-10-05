# PremireTSMarkerとは
[SukoStamp](https://chromewebstore.google.com/detail/sukostamp/bioancpdekiljihjfibhpadakcnceoeg)などで作られた主にYouTube用のタイムスタンプをPremiere Proにマーカーとして表示させる

# ExtendScript Debugger のセットアップ方法

[Visual Studio Code](https://code.visualstudio.com/)を使ってプログラムを実行していきます。

Visual Studio Codeの拡張機能、[ExtendScript Debugger](https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug)をインストール。

## プロジェクトのダウンロード

![2](https://github.com/keimaruO/PremiereTSMarker/assets/91080250/a861b5c7-70a1-4ddf-baf4-c1f89466bec1)

1. 今開いてるこのページの右上にある「<>Code」ボタンをクリック
2. ドロップダウンメニューから「Download ZIP」を選択
3. プロジェクトのZIPファイルがダウンロードされファイルを解凍したら完了

## ダウンロードしたフォルダをVisual Studio Codeで開く

![3](https://github.com/keimaruO/PremiereTSMarker/assets/91080250/d3c06629-1f65-4be6-9ab7-cb0bcc13392f)


1. 解答したフォルダをつかんでドラッグアンドドロップ

## ExtendScriptを実行する

ExtendScriptの実行前に、Premire Proを起動させてプロジェクトを開いた状態にしておく

![1](https://github.com/keimaruO/PremiereTSMarker/assets/91080250/4706dcfd-dcd2-4b5a-afa8-dd8284cf1b53)

1. 実行とデバッグ　→　Launch　→　Premiere Pro　の順番で選択する
2. 読み込みたいタイムスタンプが保存されている.txtファイルをダブルクリックで選択

そしたら機能しているはず


timestamp.txtに各々タイムスタンプをコピペし上書き保存して使用してください。

### 豆知識

マーカーにカーソルを合わせるとタイムスタンプメモも表示される


色は左から順番に付けてて、大量にあると分かりづらいから色で差別化してわかりやすくなってる、、はず、、、


コピペする時はメモ帳を開かなくてもVisual Studio Codeからより簡単に編集できます。

[ファイル]で自動保存をオンすると便利。常に上書き保存される状態になる

![image](https://github.com/keimaruO/PremiereTSMarker/assets/91080250/22be6c89-b240-4c62-84e0-863d93a2c827)
