//função para dar input no sorteio, aqui coloquei as variaveis do html, importando os valores digitados pelo usuario
function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    console.log(quantidade, de, ate);
    //exibir alerta de erro caso variavel 'de' foi maior que variavel 'ate'
    if (de >= ate) {
        alert('O número no campo "Do número" não pode ser maior que o "Até número.')
    } else {
        //lista para guardar os números gerados aleatoriamente
    let sorteados = [];
    let numero;
    //looping para gerar os números aleatorios enquanto a variavel 'i' for menor que a 'quantidade' digitada pelo usuario
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        sorteados.push(numero);
        
       
    }
    // aqui vai chamar a funçao pra exibir a mensagem correta na tela dependendo a quantidade de numeros escolhida na variavel 'quantidade'
    exibirTela(sorteados);
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
    
    if (sorteados.length === 1) {
        campo.innerHTML = `<label class="texto__paragrafo">O número sorteado é: ${sorteados}.</label>`;
    } else if (sorteados.length > 1) {
        campo.innerHTML = `<label class="texto__paragrafo">Os números sorteados são: ${sorteados}.</label>`;
    } else {
        campo.innerHTML = `<label class="texto__paragrafo">Não há números sorteados.</label>`;
    }
}

