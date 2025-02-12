alert("Testando");
let numeroSecreto = 29;
console.log(numeroSecreto)
let chute = prompt("Escolha um número entre 1 e 30:")

if (chute == numeroSecreto){
    alert(`Você descobriu o número secreto ${numeroSecreto}`);
    return true
} else{
    alert("Você errou.")
}
