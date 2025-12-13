const elementoAno = document.getElementById("ano-atual");

const anoAtual = new Date().getFullYear();

elementoAno.innerText = anoAtual;

console.log(`Ano atualizado para: ${anoAtual}`);