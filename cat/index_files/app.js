var carrot = 0;
var gold = 0;
var silver = 0;
var rabbit = 0;
var bigRabbit = 0;
var farm = 0;

function update(){
    document.querySelector("#click").innerHTML = "+" + (1+rabbit+bigRabbit*3) + " Click";
    document.querySelector("#clickSec").innerHTML = "+" + (1*farm) + " Click/sec";
    document.querySelector("#carrotCount").value = carrot.toLocaleString();
    
    document.querySelector("#needGold").innerHTML= "시세 : "+ 50 + " 당근";
    document.querySelector("#nowGold").innerHTML= "보유 : "+gold + " 금";

    document.querySelector("#needSilver").innerHTML= "시세 : "+ 25 + " 당근";
    document.querySelector("#nowSilver").innerHTML= "보유 : "+silver + " 은";

    document.querySelector("#needRabbit").innerHTML= "시세 : "+ 5*(rabbit+1) + " 은";
    document.querySelector("#nowRabbit").innerHTML= "보유 : "+rabbit + " 토끼";

    document.querySelector("#needBigRabbit").innerHTML= "시세 : "+ 25*(bigRabbit+1) + " 은";
    document.querySelector("#nowBigRabbit").innerHTML= "보유 : "+bigRabbit + " 토끼";

    document.querySelector("#needFarm").innerHTML = "시세 : " + 5 + " 금";
    document.querySelector("#nowFarm").innerHTML = "보유 : "+ farm + " 텃밭";
}

function add(){
    carrot = carrot + 1 + rabbit + (bigRabbit*3);
    update()
}

function time(){
    carrot = carrot + (1*farm);
    update()
}

setInterval(time, 1000)

function buyGold(){
    if (carrot >= 50){
        carrot = carrot - 50;
        gold = gold + 1;
    } else {
        alert("당근이 부족해!");
    }
    update()
}

function buySilver(){
    if(carrot >= 25){
        carrot = carrot - 25;
        silver = silver + 1;
    } else {
        alert("당근이 부족해!");
    }
    update()
}

function buyRabbit(){
    if(silver >= 5*(rabbit+1)){
        silver = silver - 5*(rabbit+1);
        rabbit = rabbit + 1;
    } else {
        alert("은이 부족해!");
    }
    update()
}

function buyBigRabbit(){
    if(silver >= 25*(bigRabbit+1)){
        silver = silver - 25*(bigRabbit+1);
        bigRabbit = bigRabbit + 1;
    } else {
        alert("은이 부족해!");
    }
    update()
}

function buyFarm(){
    if(gold >= 5*(farm+1)){
        gold = gold - 5*(farm+1);
        farm = farm + 1;
    } else {
        alert("금이 부족해!");
    }
    update()
}


function save() {
    alert("저장 성공!");
    localStorage.setItem("carrot", carrot);
    localStorage.setItem("gold", gold);
    localStorage.setItem("silver", silver);
    localStorage.setItem("rabbit", rabbit);
    localStorage.setItem("bigRabbit", bigRabbit);
    localStorage.setItem("farm",farm);
    

}

function load() {
    alert("불러오기 성공!");
    carrot = localStorage.getItem("carrot");
    carrot = parseInt(carrot);
    gold = localStorage.getItem("gold");
    gold = parseInt(gold);
    silver = localStorage.getItem("silver");
    silver = parseInt(silver);
    rabbit = localStorage.getItem("rabbit");
    rabbit = parseInt(rabbit);
    bigRabbit = localStorage.getItem("bigRabbit");
    bigRabbit = parseInt(bigRabbit);
    farm = localStorage.getItem("farm");
    farm = parseInt(farm);

    update()
}

update()