console.log("script carregado"); // DEBUG

const textos = {
  mensagens: [
    "Tudo começou com bots.",
    "Códigos.",
    "Curiosidade."
  ],
  autorais: [
    "Percebi o quanto te queria no instante que trocamos nossas primeiras mensagens."
  ],
  poemas: [
    "Somos dois códigos diferentes que juntos fazem o universo funcionar."
  ],
  promessas: [
    "Prometo continuar escolhendo você."
  ],
  futuro: [
    "Planos simples. Dias juntos. Amor sem ponto final."
  ],
  codigo: [
    "if (voce === meuAmor) {",
    "  return 'Eu te amo.';",
    "}"
  ]
};

let indice = 0;
let atual = [];

// ESPERA O HTML CARREGAR
document.addEventListener("DOMContentLoaded", () => {

  // BOTÃO START
  document.getElementById("btnStart").addEventListener("click", () => {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("conteudo").classList.remove("oculto");
  });

  // BOTÕES DO DIÁRIO
  document.querySelectorAll("[data-secao]").forEach(botao => {
    botao.addEventListener("click", () => {
      const tipo = botao.dataset.secao;
      abrirSecao(tipo);
    });
  });

});

function abrirSecao(tipo) {
  const saida = document.getElementById("saida");
  indice = 0;
  atual = textos[tipo];
  saida.innerText = "";
  revelarLinha();
}

function revelarLinha() {
  if (indice < atual.length) {
    document.getElementById("saida").innerText += atual[indice] + "\n";
    indice++;
    setTimeout(revelarLinha, 700);
  }
}
