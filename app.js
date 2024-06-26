//função para dar input no sorteio, aqui coloquei as variaveis do html, importando os valores digitados pelo usuario
function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    console.log(quantidade, de, ate);
    
    //exibir alerta de erro caso variavel 'de' foi maior que variavel 'ate'
    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        document.getElementById('quantidade').focus();
        return limparCaixas();
    
        //exibir alerda de erro caso a quantidade de numeros for menor que a possibilidade de numero aleatorios gerados
    } else if (quantidade > (ate - de + 1)) {
        alert('A "quantidade de números" é maior que a possibilidade de números sorteados');
        document.getElementById('quantidade').focus();
        return limparCaixas();
    } else {
        
        //lista para guardar os números gerados aleatoriamente
    let sorteados = [];
    let numero;
    
    //looping para gerar os números aleatorios enquanto a variavel 'i' for menor que a 'quantidade' digitada pelo usuario
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        
        //enquanto houver um número repetido sendo gerado, o gerador não vai parar de gerar ate encontrar um número não repetido dento da array 'sorteados'
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
            // alert('Tentando obter número inédio');
        }
        //aqui o número não repedito será guardado dentro da array 'sorteados'
        sorteados.push(numero);   
    }
    // aqui vai chamar a funçao pra exibir a mensagem correta na tela dependendo a quantidade de numeros escolhida na variavel 'quantidade'
    exibirTela(sorteados);
    
    //caso queira desativar o botao sortear enquanto o botao reiniciar será habilitado para que possa executar a function reiniciar(), é so remover o competario da linha abaixo
    // document.getElementById('btn-sortear').setAttribute('disabled', 'true');
    document.getElementById('btn-reiniciar').removeAttribute('disabled', 'false');
    }
    

}
// função para gerar o número aleatorio entre as variaveis 'de' e 'ate'
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//function que vai analisar a quntidade de numeros na lista 'sorteados' e retornar a mensagem correta no singular ou plural
function exibirTela(sorteados) {
    let campo = document.getElementById('resultado');
    campo.innerHTML = '<label class="texto__paragrafo">O número sorteado é: Ainda não tem número sorteado</label>';
    
    //variavel para guardar os numeros que serão formatados mais abaixo
    let numerosFormatados = '';
    
    //ordenar numero de forma crescente
    sorteados.sort((a, b) => a - b);
    
    if (sorteados.length === 1) {
        //Formata os números dentro de parênteses e os separa por vírgulas
        numerosFormatados = sorteados.map(numero => `(${numero})`).join(', ');

        //exibe as mensagens com os numeros formatados dentro da lista 'sorteados'
        campo.innerHTML = `<label class="texto__paragrafo">O número sorteado é: ${numerosFormatados}.</label>`;
    } else if (sorteados.length > 1) {
        numerosFormatados = sorteados.map(numero => `(${numero})`).join(', ');
        campo.innerHTML = `<label class="texto__paragrafo">Os números sorteados são: ${numerosFormatados}.</label>`;
    } else {
        campo.innerHTML = `<label class="texto__paragrafo">Não há números sorteados.</label>`;
    }
} 

//essa function vai limpar as variaveis 'quantidade', 'de' e 'ate', quando o botao 'reiniciar' for clicado
function limparCaixas() {
    quantidade = document.getElementById('quantidade');
    de = document.getElementById('de');
    ate = document.getElementById('ate');
    quantidade.value = '';
    de.value = '';
    ate.value = '';
    document.getElementById('quantidade').focus();

}

//essa function fará com que o jogo seja reiniciado
function reiniciar() {
    limparCaixas();
    document.getElementById('btn-reiniciar').setAttribute('disabled', 'true');
}

//atribuindo a tecla 'ENTER' para sortear os números
// document.addEventListener('keypress', function(enter) {
//     if (enter.key === 'Enter') {
//         sortear();
//     }
// })

document.addEventListener('keypress', function(enter) {
    if (enter.key === 'Enter') {
        if (document.getElementById('btn-reiniciar').disabled) {
            document.getElementById('btn-sortear').click();
            
        } else {
            reiniciar();
        }
    }
});

