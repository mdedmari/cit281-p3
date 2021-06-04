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