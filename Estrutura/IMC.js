//Calculo IMC//

const peso = 70
const altura = 1.90
var imc = peso/(altura ^2);
console.log(imc);
if (imc < 18.5){
    console.log("baixo peso")
} else if (imc > 18.5 && imc < 24.9){
    imc = "Intervalo normal";
    console.log(imc);
} else if (imc > 25 && imc < 29.9){
    imc = "Sobrepeso";
    console.log(imc);
} else if (imc > 30 && imc < 34.9){
    imc = "obesidade classe I";
    console.log(imc);
} else{
    imc = "BORA EMAGRECER PARCEIRO!!!";
    console.log(imc);
} switch(imc){
    case "baixo peso":
        console.log("Bora engordar né poh");
        break;
    case "Intervalo normal":
    console.log("Bixin ta saudável");
        break;
    case "Sobrepeso":
        console.log("Ta engordando, vamo manter");
        break;
    case "obesidade classe I":
        console.log("Tem que emagrecer hein");
        break;
    case "BORA EMAGRECER PARCEIRO!!!":
        console.log("Vamo tratar isso, está virando doença")
}
