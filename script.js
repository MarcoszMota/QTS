function somar(a, b) {
  return a + b;
}

function mensagemBoasVindas(nome) {
  return `Olá, ${nome}!`;
}

function numeroMaior(a,b){
    if(a>b){return `${a}é maior`}else{return `${b} é maior`}
}

module.exports = { somar, mensagemBoasVindas };