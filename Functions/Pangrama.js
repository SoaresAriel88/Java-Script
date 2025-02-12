//Verificação se uma palavra é um Pangrama//

function palavraPangrama(verificacao) {
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    const verificacaoLower = verificacao.toLowerCase();

    for (let char of alfabeto) {
        if (!verificacaoLower.includes(char)) {
            return false;
        }
    }

    return true;
}


console.log(palavraPangrama("Ola Ola, como você esta ?"));
console.log(palavraPangrama("Hello World")); 
