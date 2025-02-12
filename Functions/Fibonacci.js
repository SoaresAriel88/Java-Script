//Sequência de Fibonacci//

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}


var n = 7;
console.log("O " + n + "º termo da sequência de Fibonacci é: " + fibonacci(n));
