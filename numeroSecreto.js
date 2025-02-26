alert("Bem vindos ao jogo adivinhando o número secreto");
let numeroSecreto = parseInt(Math.random()*10 +30);
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


let palavraTentativa = tentativa > 1 ? tentativas : tentativa;
alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.` );
//if (tentativas > 1){
  //  alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.` );
//}else{alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.` );}


