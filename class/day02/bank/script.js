let p_name,p_corp, p_email, p_account, p_amount, p_balance,p_des;

window.onload = function(){
     // 프로필 변수
     p_name = document.querySelector("#p_name"); 
     p_email = document.querySelector("#p_email"); 
     p_corp = document.querySelector("#p_corp"); 
     p_account = document.querySelector("#p_account"); 


    // 계정 변수
     p_amount = document.querySelector("#amount"); 
     p_des = document.querySelector("#desc"); 
     p_balance = document.querySelector("#dbalance"); 

    // 날짜를 한국 식으로 가져오는 방법 
    const date = new Date();
    var Today = date.toLocaleString('ko-kr');
}


var dMoney =0;
var dDes =0;
var Total_Bal =0;
var num=1;

function Total_update() {
    Total_Bal = parseInt(Total_Bal)+parseInt(input_money);
    p_balance.innerHTML = Total_Bal + "원";
}

function deposit(){
    // 테이블 코드
    var my_tbody = document.getElementById('dTable');

    var row = my_tbody.insertRow(0); // 가장 앞에 추가
    var row = my_tbody.insertRow(my_tbody.rows.length); // 가장 마지막에 추가
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = num++;
    cell2.innerHTML = '입금';
    cell3.innerHTML = p_des.value;
    cell4.innerHTML = "+ " + p_amount.value+"원";


  
}

function withdrawal(){
  
}