console.log("Hello");

// Selector
let initialPrice = document.querySelector(".initialPrice");
let stockNumber = document.querySelector(".stockNumber");
let currentPrice = document.querySelector(".currentPrice");
let TellMe = document.querySelector(".stock-btn")
let outputDiv = document.querySelector(".output-stock");

// add addeventListner
TellMe.addEventListener("click", function(){
    let ans = calculateProfitAndLoss(initialPrice.value, stockNumber.value, currentPrice.value)
})

// function



function calculateProfitAndLoss(initial, quantity, current){
    let loss, lossPercentage, profit, profitPercentage;
    //
    if(initial > current){
        loss = (initial - current);
        lossPercentage = (loss / initial) * 100;
        outputDiv.style.color = "red";
        showOutput(`Hey the loss is ${loss} and the loss percent is ${lossPercentage}`);
    }

    else if(current > initial){
        profit = (current - initial);
        profitPercentage = (profit / initial) * 100;
        outputDiv.style.color = "green";
        showOutput(`Hey the Profit is ${profit} and the profit percent is ${profitPercentage}`);
    }
    else{
        
        showOutput('No pain no gain and no gain no pain')
    }
}

function showOutput(message){
    outputDiv.innerText = message;
}