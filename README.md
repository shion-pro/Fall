# Fall

## ver 0.0.1

Hi($・・)/~~~

Shion-Proです。

![Shion-Pro-iCon](https://user-images.githubusercontent.com/52683992/105633873-7bcfed00-5e9e-11eb-8f14-031fb8dad988.png)

今回はJavascriptのモジュール?的なものを作ってみました。

これは、「指定する要素に雪など(*1)を降らせることが出来る」といった感じのものです。

*1 降ってくるものは以下の通りです

* 冬：雪、結晶

* 春：桜

* 夏：太陽、雲(他に思いつかなかった(*^^*))

* 秋：紅葉

こんな感じです(^^♪(それぞれ上から順にhigh, medium, lowの量になっています)

![winter](https://user-images.githubusercontent.com/52683992/105634191-34e2f700-5ea0-11eb-9cee-feb31eeed274.png)

![spring](https://user-images.githubusercontent.com/52683992/105634203-3f04f580-5ea0-11eb-9a52-c6408626b316.png)

![summer](https://user-images.githubusercontent.com/52683992/105634205-462c0380-5ea0-11eb-9e4b-ef3c1c65ed91.png)

![autumn](https://user-images.githubusercontent.com/52683992/105634212-4c21e480-5ea0-11eb-9071-34c8f6b7eb1e.png)

### 使い方

#### 1. ダウンロードした後Fallフォルダを使用したいhtmlファイルと同じ階層に配置

＊フォルダ名がFall-v0.0.1やFall-masterになっている場合はFallになおしてください。

#### 2. htmlに以下を記述

`<script src="Fall/main.js" type="text/javascript"></script>`

＊この時、ご自身が用いているJSを引っ張っている部分(もしくは直接記述している部分)より先に記述してください↓

例(ご自身のJSファイル名がindex.jsの場合):

`<script src="Fall/main.js" type="text/javascript"></script>`

`<script src="index.js" type="text/javascript"></script>`

＊jQueryを必要とするので、これよりさらに先にjQueryを引っ張ってね(^^♪

例(結局こんな感じ):

`<script src="https:*ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>`

`<script src="Fall/main.js" type="text/javascript"></script>`

`<script src="index.js" type="text/javascript"></script>`

#### 3. ご自身のjavascript内にて以下を記述

`fallElement(arg1, arg2);`

* arg1:降らせたい要素(DOM, jQueryのどちらかで渡してあげてください。(_ _))

* arg2:"high", "medium", "low"の3つから降らせる量を指定(必須)

例(idがtargetという要素にたくさん降らせたい場合):

`fallElement($("#target1"), ["high"]);`

＊複数の要素に降らせたい場合は以下の通りです↓

例(classがtargetという要素が3つあり、それぞれ多, 中, 少で降らせたい場合):

`fallElement($(".target"), ["high", "medium", "low"]);`

＊Nodeで使えるかはわかんね!(^^)!今度やってみる!(^^)!

＊↑いけたわ!(^^)!

### よかったら使ってね!(^^)!

### 学び

* 生成した要素にeachかけて移動するんだけど多すぎて処理時間が1/60秒を超えてくるからeach内の処理をなるべく少なくしたつもり(そのままでも負荷的にはそんなでもなかったと思う、使い切ってない感じ)

* ドット絵描くの楽しかった、やっぱ絵のセンスはないな($・・)/~~~

* positionに関してなんとなーく理解した

* そんなもんかね、あんま学んでないな!(^^)!

#### 以下作業ログですん

* 青くなるのどうにかしたい=>したけどこれで配下の要素クリックできんの？=>多分できるわ
* 大きさぎりぎりのピクセルを作る
* 冬:雪、なんかある？
* 春:花びら、円形のも欲しい
* 夏:雲、太陽
* 秋:落ち葉、もみじ
* 二回目以降の生成がおかしい(出現する)から上からやる
* 生成がおかしくね(画面内で生成されてる)=>生成するイメージのピクセルぶんをtopからさらに引く事で解消すると思う
* 季節ごとに配列(["speed", "size", ["右", "左"・・・]]的なのを*10くらいにランダム)を作ってそれをランダムで適応すればよさそう(葉っぱとかはspeedも可変にしたいことあるよねってことは?)(この方法の方が軽くなりそう)
* Math.round(Math.random())これで1, 2のどっち生成するかランダム化する(このコードは0 or 1を生成)
* performance.now()で時間計測すれば早くなったりしない
* 雪玉だけ10px, 他は25か20でいい感じ
* ってことはwidthに関しても25px引かなきゃいけないよね(positionX>25の場合のみ)=>んまいっか
* 邪魔だから関数にまとめるかしたいね returnで
* z-indexは+1する
* 重なりがずれるのはどうすれば...
* 子要素じゃなくて別要素とすればいいんじゃねえか？=>出来たけどなんか下にマージン空く=>top:negative valueじゃなくてmargin-topにすると何か治った=>なんかmargin-topだとバグって効かないときもある=>topに戻してmargin-bottomでマイナスすればspace消えていい感じ
* width, height必要ある?=>ないわ
* layerSizeも監視して変えなきゃな=>ってことは降る場所も=>やったけどなんか変わらん=>まいっかしーらね
