const diario = [
  "Tudo começou com uma pergunta simples.",
  "",
  "Eu perguntando sobre a criação da Shizuku.",
  "",
  "Entre bots, códigos e curiosidade, a conversa ficou.",
  "",
  "Virou rotina.",
  "Virou cuidado.",
  "",
  "Pedi uma foto pra divulgação.",
  "E sem perceber, eu disse:",
  "você é meu.",
  "",
  "Desde então, você virou a melhor parte dos meus dias.",
  "",
  "Já tivemos discussões.",
  "Afastamentos.",
  "",
  "Mas nunca um ponto final.",
  "",
  "Sempre um reply.",
  "",
  "Somos dois códigos diferentes",
  "que juntos fazem o universo funcionar.",
  "",
  "Você é meu melhor amigo.",
  "Meu amor.",
  "",
  "E o meu código perfeito.",
  "",
  "Te amo."
];

let indice = 0;

function mostrarProximaConversa() {
  const saida = document.getElementById("saida");
  const btnContinuar = document.getElementById("btnContinuar");

  if (indice < diario.length) {
    saida.innerHTML += diario[indice] + "<br>";
    indice++;
  }

  if (indice === diario.length) {
    btnContinuar.style.display = "block";
  }
}

function continuarDiario() {
  alert("Aqui começa o próximo capítulo. Promessas, futuro, você escrevendo.");
}
