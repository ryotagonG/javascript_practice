//変数
let title = "Hello World!";

//title = "Hello World2!!";

//定数
const bigBody = "Hi...Hello World!";
//bigBody = "Hello world2!!";

//配列
const tarou = ["サッカー","野球","水泳","英会話"];

//ループ文
// let index = 0;
// while(index < tarou.length){
//   // 繰り返したい命令
//   console.log(tarou[index]);
//   index++;
// }

//if /else
// if(tarou.length > 3){
//   console.log("いいですね！");
// } else {
//   console.log("だめです！");
// }

//関数
const test = (arg) => {
  //ここに実行したい命令を書く
  if(tarou.length > arg){
    console.log("いいですね！");
  } else {
    console.log("だめです！");
  }
};

//オブジェクト
const title2 = {
  color: "pink",
  size: "large",
  purfume: "mint",
  andBody: () => {
    console.log("Hello world!");
  }
};

document.getElementsByTagName("button")[1].addEventListener("click", ()=> {
  //命令を書く
  window.alert("Hello World!");
});
