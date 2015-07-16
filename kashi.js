var ctx1;
var canvas;

function kashi1(){
  console.log("kashi1");
  window.setTimeout(kashi2, 13000); //13
  var txt = "降り始めた雪は　足跡消して";
  ctx1.fillStyle = "#00bfff";
  ctx1.font = 'bold 50px "HG丸ゴシックM-PRO"';
}

function kashi2(){
  console.log("kashi2");
  window.setTimeout(kashi3, 6000); //19
  var txt = "真っ白な世界に　ひとりのわたし";
  ctx1.fillStyle = "#00bfff";
  ctx1.font = 'bold 50px "HG丸ゴシックM-PRO"';
}

function kashi3(){
  console.log("kashi3");
  window.setTimeout(kashi4, 6000); //27
  var txt = "風が心にささやくの　このままじゃ　ダメなんだと";
  ctx1.fillStyle = "#00bfff";
  ctx1.font = 'bold 50px "HG丸ゴシックM-PRO"';
}

function kashi4(){
  console.log("kashi4");
  // まだ次の歌詞がないのでコメントアウト。次の歌詞ができたら、行頭の // を外してください
  //  window.setTimeout(kashi5, 13000);
  var txt = "降り始めた雪は　足跡消して";
  ctx1.fillStyle = "#00bfff";
  ctx1.font = 'bold 50px "HG丸ゴシックM-PRO"';
}

function start(){
  canvas = document.querySelector("#canvas");
  ctx1 = canvas.getContext("2d");
  window.setTimeout(kashi1, 1000); // 1秒後にkashi1を呼ぶ
}

window.addEventListener("load", start); // ページが読み込まれたら、startを呼ぶ
