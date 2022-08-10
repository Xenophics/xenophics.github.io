let num = 0;
let displayNum = document.querySelector("#num-clicked");
let popcatGroup = document.querySelector(".popcat-group");
let popcat1 = document.querySelector("#popcat1");
let popcat2 = document.querySelector("#popcat2");
let audio = document.querySelector("#audio");
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
      num++;
      displayNum.innerText = "     " + num +"팝!";
      popcat1.classList.remove("no-display");
      popcat2.classList.add("no-display");
      popcatGroup.removeEventListener("mouseup", handleMouseUp);
    })();
  }
};

function save(){
  localStorage.setItem("pop", num);
}
function load(){  
  var SaveData = localStorage.getItem("pop");
  num = SaveData;
  update();
}
function update(){ 
  displayNum.innerText = "      " + num +"팝!";
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
    num++;
    displayNum.innerText = "      " + num +"팝!";
    popcat1.classList.remove("no-display");
    popcat2.classList.add("no-display");
    popcatGroup.removeEventListener("touchend", handleTouchEnd);
  })();
};