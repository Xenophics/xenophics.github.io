let num = 0;
let displayNum = document.querySelector("#num-clicked");
let popcatGroup = document.querySelector(".popcat-group");
let popcat1 = document.querySelector("#popcat1");
let popcat2 = document.querySelector("#popcat2");
let audio = document.querySelector("#audio");
let Level = document.querySelector("#needGold");
let Msg = document.querySelector("#Msg");
let mobile = false;

let cssVar = (val) => {
  return getComputedStyle(document.querySelector(":root")).getPropertyValue(val);
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

let checkMobile = () => {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    console.log("mobile device");
    return (mobile = true);
  } else {
    console.log("not mobile device");
    return (mobile = false);
  }
};

mobile = checkMobile();

let changeColor = (myThis) => {
  let myBody = document.querySelector("body");
  let myColor = myThis.id;
  console.log(myColor);
  myBody.style.backgroundColor = myColor;
};

let handleMouseDown = (event) => {
  if (mobile == false) {
    popcat1.classList.add("no-display");
    popcat2.classList.remove("no-display");
    audio.play();

    popcatGroup.addEventListener("mouseup", handleMouseUp);
  }
};

let handleMouseUp = (event) => {
  if (mobile == false) {
    (async () => {
      await sleep(100);
      num = num +plusScore;
      MsgBox();
      update();
      popcat1.classList.remove("no-display");
      popcat2.classList.add("no-display");
      popcatGroup.removeEventListener("mouseup", handleMouseUp);
    })();
  }
};
var plusScore =1;

function MsgBox(){
  var ran = Math.floor(Math.random()*4);
  if(ran == 0){
    Msg.innerHTML = "<font color=green>갑옥!!!</font>";
 }else if (ran==1){
    Msg.innerHTML = "<font color=green>힘들어 힘들어 ~</font>";
 }else if (ran==3){
    if(Math.floor(Math.random() * 100) < 10){      
      Msg.innerHTML = "<font color=blue>나는 자라나는 일꾼!!!!! 으아아! (갑옥 10개 추가)</font>";
      num=num+10;
    }else {      
      if(num <=2){

      }else {
        Msg.innerHTML = "<font color=red>나도 먹고 살자...! 갑옥을 약탈했다!</font>";
        num=num-2;
      }
    }
 }else {
  Msg.innerHTML = "<font color=green>쉬고 싶어?</font>";
 }
}

function bUpgrade(){
      if(num >= 1){
        if(Math.floor(Math.random() * 100) <= 50){
        num = num -1;
        plusScore = plusScore+1;
        Msg.innerHTML = "<font color=blue>강화에 성공했습니다!"+"(클릭 당 갑옥 "+plusScore+"개 획득)</font>";
        update();
      } else {
        var FailUp = Math.floor(Math.random() * 10);
        if(plusScore-FailUp <= 0){
          Msg.innerHTML = "<font color=red>강화에 실패해 강화 수치가 "+FailUp+"만큼 하락 했습니다.<br>강화 수치가 1보다 낮아, 기본 수치로 복구 되었습니다.</font>";
          plusScore =1;
          update();
      }else {
        Msg.innerHTML = "<font color=red>강화에 실패해 강화 수치가 "+FailUp+"만큼 하락 했습니다.</font>";
        plusScore = plusScore - FailUp;
        update();
      }
    }
     
  }  else {
    Msg.innerHTML = "<font color=red>갑옥이 부족합니다.</font>";
}
}

function save(){
    if (!confirm("높은 확률로 게임을 저장 할 수 있습니다. 실패 시 모든 수치가 초기화됩니다.")) {
      
    } else {
      if(Math.floor(Math.random() * 100) < 80){
          localStorage.setItem("pop", num);
          localStorage.setItem("pScore", plusScore);
         alert(num+'회 저장 완료! 로컬 기반으로 캐쉬 삭제 시 초기화 됩니다.');
      }else{
         alert('저장 실패!!! 모든 값이 초기화 되었습니다.');
         localStorage.setItem("pop", 0);
         localStorage.setItem("pScore", 0);
         plusScore =1;
         num=0;
         update();
      }
  } 
}
function load(){  
   if (!confirm("꽤 낮은 확률로 게임을 불러올 수 있습니다. 실패 시 모든 수치가 초기화됩니다.")) {
      
  } else {
    if(Math.floor(Math.random() * 100) < 70){      
      alert('불러오기 성공!');
      var SaveData = localStorage.getItem("pop");
      var SavePlusScore = localStorage.getItem("pScore");
      num = parseInt(SaveData);
      plusScore = parseInt(SavePlusScore);
      update();
    }else{
       alert('불러오기 실패!!! 모든 값이 초기화 되었습니다.');
       localStorage.setItem("pop", 0);
       localStorage.setItem("pScore", 1);
       plusScore =1;
       num=0;
       update();
    }
}
}
function update(){ 
 
 displayNum.innerText = "      " + num +"팝! ("+plusScore+"강)";
 displayNum.value = num.toLocaleString();
 Level.innerText = "레벨: " +plusScore;
}

let handleTouchStart = (event) => {
  popcat1.classList.add("no-display");
  popcat2.classList.remove("no-display");

  audio.play();

  popcatGroup.addEventListener("touchend", handleTouchEnd);
};
let handleTouchEnd = (event) => {
  (async () => {
    await sleep(10);
    num = num + plusScore;
    MsgBox();
    update();
    popcat1.classList.remove("no-display");
    popcat2.classList.add("no-display");
    popcatGroup.removeEventListener("touchend", handleTouchEnd);
  })();
};