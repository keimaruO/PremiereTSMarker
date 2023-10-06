# PremireTSMarkerとは
[SukoStamp](https://chromewebstore.google.com/detail/sukostamp/bioancpdekiljihjfibhpadakcnceoeg)などで作られた主にYouTube用のタイムスタンプをPremiere Proにマーカーとして表示させる

## 使用例


https://github.com/keimaruO/PremiereTSMarker/assets/91080250/ef9b4c66-3056-4410-9be0-441df46a5231



# ExtendScript Debugger のセットアップ方法

[Visual Studio Code](https://code.visualstudio.com/)を使ってプログラムを実行していきます。インストールしてない方はインスト！ [VScodeを日本語化する方法](https://www.javadrive.jp/vscode/install/index4.html)

Visual Studio Codeの拡張機能、[ExtendScript Debugger](https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug)をインストール。

## プロジェクトのダウンロード

![2](https://github.com/keimaruO/PremiereTSMarker/assets/91080250/f68b4a01-3e6d-41cd-adc2-6b9d38fd1d15)


1. 今開いてるこのページの右上にある「<>Code」ボタンをクリック
2. ドロップダウンメニューから「Download ZIP」を選択
3. プロジェクトのZIPファイルがダウンロードされファイルを解凍したら完了

## 解凍したフォルダをVisual Studio Codeで開く


![3](https://github.com/keimaruO/PremiereTSMarker/assets/91080250/b1bdc273-1e5c-43e3-91d2-d6b65c9f55e5)


1. 解答したフォルダをつかんでVisual Studio Codeにドラッグアンドドロップ

## ExtendScriptを実行する

ExtendScriptの実行前に、Premire Proを起動させてプロジェクトを開いた状態にしておく

![1](https://github.com/keimaruO/PremiereTSMarker/assets/91080250/6f8a2e6d-2af7-4525-a35e-0cadf889680f)


1. 実行とデバッグ　→　Launch　→　Premiere Pro　の順番で選択する
2. 読み込みたいタイムスタンプが保存されている.txtファイルをダブルクリックで選択

そしたら機能しているはず


timestamp.txtに各々タイムスタンプをコピペし上書き保存して使用してください。

### 豆知識

マーカーにカーソルを合わせるとタイムスタンプメモも表示される


マーカーをカラフルな色にしてるのは、大量にあると分かりずれぇから色で差別化してわかりやすくなってる、、はず、、、


コピペする時はメモ帳を開かなくてもVisual Studio Codeからより簡単に編集できます。

[ファイル]で自動保存をオンすると便利。常に上書き保存される状態になる

![4](https://github.com/keimaruO/PremiereTSMarker/assets/91080250/6e97ad04-624d-4016-bfd9-cc1630445e6d)


# ライセンスについて

MITライセンスです

わからない人用に説明すると、ソフトウェアやそれに付属するドキュメントに関するライセンスなので、ソフトウェアの出力物(動画など)に対しては範囲外です。

つまり、切り抜き動画の概要欄にもどこにも書く必要ないです、ま、知らない人へ広まってたくさん切り抜き動画が増えてほしいとワイ思ってるので！知らない人に教えてあげてくださーい！(切実)

ソースコードを改良したりしたものを投稿する時はMITライセンスの条件どおりにってことでふ、おなしゃす
