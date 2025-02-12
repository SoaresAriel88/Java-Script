//Calculo Cosseno//

function cos(angulo) {
    let resultado = 0;
    let termo = 1;
    let sinal = 1;
    
    for (let n = 0; n < 10; n++) {
        resultado += sinal * termo;
        sinal *= -1;
        termo = termo * angulo * angulo / ((2 * n + 1) * (2 * n + 2));
    }
    
    return resultado;
}


const angulo = Math.PI / 3;


const valorCos = cos(angulo);

console.log("O cosseno de " + angulo + " radianos é: " + valorCos);
