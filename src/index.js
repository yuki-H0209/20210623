import "./styles.css";

const canvas = document.querySelector("#draw-area"); //draw-areaを参照
const context = canvas.getContext("2d"); //キャンバスに２Dで書き込みを許可

canvas.addEventListener("mousemove", (event) => {
  draw(event.layerX, event.layerY); //C入力イベントの処理
});
canvas.addEventListener("touchmove", (event) => {
  draw(event.layerX, event.layerY); //スマホ入力イベントの処理
});
canvas.addEventListener("mousedown", () => {
  context.beginPath(); //ＰＣからの下記はじめイベント
  isDrag = true;
});
canvas.addEventListener("mouseup", () => {
  context.closePath(); //ＰＣからの書き終わりイベント
  isDrag = false;
});
canvas.addEventListener("touchstart", () => {
  context.beginPath(); //スマホからの書き終わりイベント
  isDrag = true;
});

canvas.addEventListener("touchend", () => {
  context.closePath(); //スマホからの書き終わりイベント
  isDrag = false;
});

const clearButton = document.querySelector("#clear-button"); //index.htmlで定義したボタンを参照
clearButton.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height); //そのボタンをクリックした時に指定範囲をクリア；左から　ｘ座標，ｙ座標，横幅，高さ　の順に指定　；これでキャンパス全体がクリアされる
});

let isDrag = false; //このフラグを利用して描写中か否かを管理

function draw(x, y) {
  if (!isDrag) {
    return; //描写中フラグがfalseの場合(ドラッグされていないとき)は，後続の描写処理を実行せず終了(書かない)
  }
  context.lineWidth = 5; //描画する線の太さ
  context.strokeStyle = "#399069"; //線の色
  context.lineTo(x, y); //描画するポイントの入力のx,y座標
  context.stroke(); //描画実行
}

/*
document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
*/
