const textos = {
  mensagens: [
    "Tudo começou com bots.",
    "Códigos.",
    "Curiosidade.",
    "",
    "Uma pergunta simples sobre a Shizuku.",
    "E sem perceber, a conversa ficou.",
    "",
    "Virou rotina.",
    "Virou cuidado.",
    "Virou vontade."
  ],

  autorais: [
    "Percebi o quanto te queria no instante que trocamos nossas primeiras mensagens.",
    "Você virou casa antes mesmo de saber.", 
    "Você virou meu código preferido, virou minha paixão e meu domínio. "
  ],

  poemas: [
    "Somos dois códigos diferentes",
    "que juntos fazem o universo funcionar."
  ],

  promessas: [
    "Prometo continuar escolhendo você.",
    "Mesmo nos dias difíceis.",
    "Mesmo quando o mundo pesar."
  ],

  futuro: [
    "Planos simples.",
    "Dias juntos.",
    "E amor sem ponto final."
  ],

  codigo: [
    "if (voce === meuAmor) {",
    "  return 'Eu te escolho todos os dias.';",
    "}"
  ]
};

let indice = 0;
let atual = [];

function iniciar() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("conteudo").classList.remove("oculto");
}

function abrirSecao(tipo) {
  indice = 0;
  atual = textos[tipo];
  document.getElementById("saida").innerText = "";
  revelarTexto();
}

function revelarTexto() {
  if (indice < atual.length) {
    document.getElementById("saida").innerText += atual[indice] + "\n";
    indice++;
    setTimeout(revelarTexto, 700);
  }
}
