```
{
function validDenomimation(coin){
    const coins = ["1","5","10","25","50","100"];
    const a = coins.indexOf(coin) !== -1
    return a; 
}
console.log(validDenomimation("6"))


function valueFromCoinObject(obj){
let { denom = 0, count = 0 } = obj
return denom * count 
}


function valueFromArray(arr){
    var arr2 = arr.map((obj) => valueFromCoinObject(obj));
	return arr2.reduce((a, b) => a + b);
}


function coinCount(...coinage) {
	return valueFromArray(coinage);
}
}
```

```
{
const fs = require('fs')
const fastify = require('p3-server.js') 
module.exports = require('./p3-module.js/coinCount(...coinage)')

//GET route of /coin
fastify.get("/coin", (request, reply) => {
    const {denom = 0, count = 0} = request.query;
    let coinValue = coinCount({denom, count});
    reply
    .code(200)
    .header("Content-Type",'text/html')
    .send(`<h2>Value of ${count} of ${denom} is ${coinValue}</h2><br /><a href="/">Home</a>`
    )

})

//GET route of /coins pt 2
fastify.get("/coins",(request, reply) => {
    const {option} = request.query;
    let coinValue;
    const coins = [{denom: 25, count: 2},{denom: 1, count: 7}];
    switch (option){
        case "1":
            coinValue = coinCount({ denom: 5, count: 3}, { denom: 10, count: 2 });
            break;
            case "2":
                coinValue = coinCount(...coins);
                break;
            default:
            coinValue = 0; 
    };
    console.log(coinValue);
    reply
        .code(200)
        .header("Content-Type", 'text/html')
        .send(`<h2>Option ${option} value is ${coinValue}<h2><br /><a href="/">Home</a>`)
}) 
}
```
