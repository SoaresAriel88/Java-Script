//Calculo MMC//

function minimoMultiplo(a, b) {
    if (b === 0) {
        return a;
    } else {
        return minimoMultiplo(b, a % b);
    }
}

function lcm(a, b) {
    return (a * b) / minimoMultiplo(a, b);
}


var num1 = 12;
var num2 = 18;

var mmc = lcm(num1, num2);
console.log("O mínimo múltiplo comum entre " + num1 + " e " + num2 + " é: " + mmc);
