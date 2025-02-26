alert("Testando");
let numeroSecreto = prompt("Digite um número:");
console.log(numeroSecreto);
let chute ;
let tentativas = 1;

//Enquanto (loop) chute não for igual ao numero secreto
while(chute != numeroSecreto){
    chute = prompt("Escolha um número entre 1 e 30:")
    if (chute == numeroSecreto){
        break;
        
    
    } else{
        if(chute>numeroSecreto){
        alert(`O número Secreto é maior que ${chute}`);
        }else{
        alert(`O número Secreto é menor que ${chute}`);
    }
    //tentativas=tentativas + 1
    tentativas++;
}
}

if (tentativas > 1){
    alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.` );
}else{alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.` );}


