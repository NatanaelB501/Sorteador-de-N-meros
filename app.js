//função para dar input no sorteio, aqui coloquei as variaveis do html, importando os valores digitados pelo usuario
function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    console.log(quantidade, de, ate);
//lista para guardar os números gerados aleatoriamente
    let sorteados = [];
    let numero;
//looping para gerar os números aleatorios enquanto a variavel 'i' for menor que a 'quantidade' digitada pelo usuario
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        sorteados.push(numero);
       
    }
    alert(sorteados);
}
// função para gerar o número aleatorio entre as variaveis 'de' e 'ate'
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}