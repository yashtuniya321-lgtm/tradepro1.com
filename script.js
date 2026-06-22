let trades =
JSON.parse(localStorage.getItem("trades"))
|| [];

const tradeTable =
document.getElementById("tradeTable");

function loadTrades(){

tradeTable.innerHTML = "";

let totalProfit = 0;
let wins = 0;

trades.forEach(trade=>{

let pnl =
(trade.sell - trade.buy)
* trade.qty;

if(pnl > 0){
wins++;
}

totalProfit += pnl;

tradeTable.innerHTML += `
<tr>

<td>${trade.date}</td>

<td>${trade.symbol}</td>

<td>${trade.buy}</td>

<td>${trade.sell}</td>

<td>${trade.qty}</td>

<td>₹${pnl}</td>

</tr>
`;

});

document.getElementById("totalTrades")
.innerText = trades.length;

document.getElementById("totalProfit")
.innerText = "₹" + totalProfit;

let winRate =
trades.length
?
((wins/trades.length)*100)
.toFixed(1)
:0;

document.getElementById("winRate")
.innerText = winRate + "%";

}

document
.getElementById("saveTrade")
.addEventListener("click",()=>{

let trade = {

date:
document.getElementById("date").value,

symbol:
document.getElementById("symbol").value,

buy:
Number(
document.getElementById("buyPrice").value
),

sell:
Number(
document.getElementById("sellPrice").value
),

qty:
Number(
document.getElementById("quantity").value
)

};

trades.push(trade);

localStorage.setItem(
"trades",
JSON.stringify(trades)
);

loadTrades();

});

document
.getElementById("addOptionBtn")
.addEventListener("click",()=>{

alert(
"Option Trading Module Coming Next"
);

});

loadTrades();
let trades =
JSON.parse(localStorage.getItem("trades"))
|| [];

const table =
document.getElementById("tradeTable");

function loadTrades(){

table.innerHTML="";

let totalProfit = 0;
let wins = 0;
let optionCount = 0;

trades.forEach((trade,index)=>{

let pnl =
(trade.sell - trade.buy)
* trade.qty;

totalProfit += pnl;

if(pnl>0){
wins++;
}

if(trade.type==="Option"){
optionCount++;
}

table.innerHTML += `

<tr>

<td>${trade.type}</td>

<td>${trade.date}</td>

<td>${trade.symbol}</td>

<td class="${
pnl>=0 ? "profit" : "loss"
}">
₹${pnl.toFixed(2)}
</td>

<td>

<button
class="deleteBtn"
onclick="deleteTrade(${index})">

Delete

</button>

</td>

</tr>

`;

});

document.getElementById("totalTrades")
.innerText = trades.length;

document.getElementById("totalProfit")
.innerText =
"₹"+totalProfit.toFixed(2);

document.getElementById("optionCount")
.innerText = optionCount;

let winRate =
trades.length
?
((wins/trades.length)*100)
.toFixed(1)
:0;

document.getElementById("winRate")
.innerText = winRate+"%";

}

function deleteTrade(index){

trades.splice(index,1);

localStorage.setItem(
"trades",
JSON.stringify(trades)
);

loadTrades();

}

document
.getElementById("saveTrade")
.addEventListener("click",()=>{

const trade={

type:
document.getElementById("tradeType").value,

date:
document.getElementById("date").value,

symbol:
document.getElementById("symbol").value,

buy:
Number(
document.getElementById("buyPrice").value
),

sell:
Number(
document.getElementById("sellPrice").value
),

qty:
Number(
document.getElementById("quantity").value
)

};

trades.push(trade);

localStorage.setItem(
"trades",
JSON.stringify(trades)
);

loadTrades();

document.getElementById("tradeForm")
.reset?.();

});

loadTrades();