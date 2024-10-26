//Verificação se uma frase é palindromo ou não//

function palindromo(frase) {
   
    frase = frase.toLowerCase().replace(/[\W_]/g, '');
    
    
    for (var i = 0; i < frase.length/2; i++) {
        if (frase[i] !== frase[frase.length - 1 - i]) {
            return false;
        }
    }
    
    return true;
}


console.log(palindromo("Ame a ema")); 
console.log(palindromo("Luz azul"));
