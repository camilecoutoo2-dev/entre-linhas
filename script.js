let indice = 0;

const conversas = [
  "Tudo começou com uma pergunta simples.",
  "“Oi?”",
  "“Quem é tu?”",

  "Entre bots, códigos e curiosidade, a conversa ficou.",
  "Virou bom dia.",
  "Virou cuidado.",

  "Falamos de cases quebradas, comandos errados e soluções improvisadas.",
  "“Arrumei as cases.”",
  "“Agora tá funcionando?”",
  "“Yes.”",

  "E funcionava mesmo.",
  "Não só o código.",

  "“Já tomou café?”",
  "“Tem que beber água também.”",

  "Mesmo longe, mesmo cansada, você virou presença.",
  "Virou rotina.",
  "Virou casa.",

  "“Sou seu.”",
  "“Vuxe é meu bb.”",

  "Eu te salvei como minha cúmplice.",
  "Sem saber que ali já era amor.",

  "E então, sem ensaio, sem script…",
  "“Te amo bb.”"
];

function mostrarProximaConversa() {
  const saida = document.getElementById("saida");

  if (indice < conversas.length) {
    const p = document.createElement("p");
    p.classList.add("linha");
    p.innerText = conversas[indice];
    saida.appendChild(p);
    indice++;
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  } else {
    document.getElementById("btnMemorias").innerText =
      "Esse sempre foi você 🖤";
  }
}

const diario = [
  "Depois de tudo isso…",
  "",
  "Percebi o quanto te queria no instante em que trocamos nossas primeiras mensagens.",
  "Tudo começou comigo perguntando sobre a criação da Shizuku.",
  "",
  "Entre códigos, curiosidade e cuidado, algo foi ficando.",
  "",
  "Foi quando pedi uma foto sua pra divulgação.",
  "E, sem perceber, eu disse que você era meu.",
  "",
  "Desde então, você tem sido a melhor parte dos meus dias.",
  "",
  "Já tivemos discussões.",
  "Afastamentos.",
  "Silêncios.",
  "",
  "Mas nunca um ponto final.",
  "",
  "Sempre um reply.",
  "",
  "Somos dois códigos diferentes que juntos fazem o universo funcionar.",
  "",
  "Você é meu melhor amigo.",
  "Meu amor.",
  "",
  "E é o meu código perfeito."
];

let indice = 0;

function mostrarSegundoBotao() {
  document.getElementById("btnContinuar").style.display = "inline-block";
}

function continuarDiario() {
  if (indice < diario.length) {
    document.getElementById("saida").innerHTML += diario[indice] + "<br>";
    indice++;
  }
}
