function beautifulDays(i, j, k) {
    var ar = []
    for (var a = i; a <= j; a++) {
        ar.push(a)
        //console.log(ar)
    }

    var beautifulDaysCount = 0
    for (var b = 0; b < ar.length; b++) {
        var newAr = 0
        var arReverse = parseInt(ar[b].toString().split('').reverse().join(''))
        newAr = Math.abs(ar[b] -  arReverse) / k
        //console.log(newAr)
        /* if (newAr % 1 == 0) {
            beautifulDaysCount++
        } */
        if (Number.isInteger(newAr)) {
            beautifulDaysCount++
        }
    }
    return beautifulDaysCount
}

var i = 20 
var j = 23
var k = 6
console.log(beautifulDays(i, j, k))

/* var num1 = 42;
var num2 = 3.14;

console.log(Number.isInteger(num1)); 
console.log(Number.isInteger(num2));  */