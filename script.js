// ===== DADOS DO DIÁRIO =====
const diario = [
  "Tudo começou com bots.",
  "Códigos.",
  "Curiosidade.",
  "",
  "Uma pergunta simples sobre a Shizuku.",
  "E sem perceber, a conversa ficou.",
  "",
  "Virou rotina.",
  "Virou cuidado.",
  "Virou vontade.",
  "",
  "Pedi uma foto pra divulgação.",
  "E foi ali que eu disse:",
  "você é meu.",
  "",
  "Já tivemos discussões.",
  "Afastamentos.",
  "",
  "Mas nunca um ponto final.",
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

// ===== FUNÇÃO DO PRIMEIRO BOTÃO =====
function mostrarProximaConversa() {
  const saida = document.getElementById("saida");
  const btnContinuar = document.getElementById("btnContinuar");

  if (!saida) {
    console.error("ERRO: div #saida não encontrada");
    return;
  }

  if (indice < diario.length) {
    saida.innerHTML += diario[indice] + "<br>";
    indice++;
  }

  // quando acabar, mostra o segundo botão
  if (indice === diario.length && btnContinuar) {
    btnContinuar.style.display = "inline-block";
  }
}

// ===== FUNÇÃO DO SEGUNDO BOTÃO =====
function continuarDiario() {
  alert("Aqui entra o próximo capítulo. Promessas, futuro, você escrevendo 🖤");
}
