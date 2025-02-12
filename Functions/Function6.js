//Reversão de uma palavra//

function entrada(){
    var palavra = 'string'
    if (typeof(palavra) == 'string'){
        const verificação = palavra.split('').reverse().join('');
        return verificação;
    }
    
}
console.log(entrada())
