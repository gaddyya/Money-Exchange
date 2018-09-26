module.exports = function makeExchange(currency) {

    let cashIn = currency;
    let cashOut = new Object();
    let ERROR =  {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if (cashIn > 10000) return ERROR;
        else{
            if(Math.floor(cashIn / 50) > 0) cashOut["H"] = Math.floor(cashIn / 50);
            if(Math.floor((cashIn % 50) / 25) > 0) cashOut["Q"] = Math.floor((cashIn % 50)/ 25);
            if(Math.floor((cashIn % 25) / 10) > 0) cashOut["D"] = Math.floor((cashIn % 25) / 10);
            if(Math.floor(((cashIn % 25) % 10) / 5) > 0) cashOut["N"] = Math.floor(((cashIn % 25) % 10)/ 5);
            if(Math.floor(cashIn % 5) > 0) cashOut["P"] = Math.floor(cashIn % 5);
        return cashOut;
        }
}

/*
    for(let i = [50, 25, 10, 5, 1];

*/
