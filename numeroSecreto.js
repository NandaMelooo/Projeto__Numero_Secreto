alert("Testando");
let numeroSecreto = 29;
console.log(numeroSecreto);
let chute ;
let tentativas = 1;

//Enquanto (loop) chute não for igual ao numero secreto
while(chute != numeroSecreto){
    chute = prompt("Escolha um número entre 1 e 30:")
    if (chute == numeroSecreto){
        alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.` );
    
    } else{
        if(chute>numeroSecreto){
        alert(`O número Secreto é maior que ${chute}`);
        }else{
        alert(`O número Secreto é mamenor que ${chute}`);
    }
    //tentativas=tentativas + 1
    tentativas++;
}
}


