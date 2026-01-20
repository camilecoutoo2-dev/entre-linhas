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
  "Tudo começou com uma pergunta simples.",
  "“Oi?”",
  "“Quem é tu?”",
  "",
  "Entre bots, códigos e curiosidade, a conversa ficou.",
  "Virou bom dia.",
  "Virou cuidado.",
  "",
  "Falamos de cases quebradas, comandos errados e soluções improvisadas.",
  "“Arrumei as cases.”",
  "“Agora tá funcionando?”",
  "“Yes.”",
  "",
  "E funcionava mesmo.",
  "Não só o código.",
  "",
  "“Já tomou café?”",
  "“Tem que beber água também.”",
  "",
  "Mesmo longe, mesmo cansada, você virou presença.",
  "Virou rotina.",
  "Virou casa.",
  "",
  "“Sou seu.”",
  "“Vuxe é meu bb.”",
  "",
  "Eu te salvei como minha cúmplice.",
  "Sem saber que ali já era amor.",
  "",
  "E então, sem ensaio, sem script…",
  "“Te amo bb.”"
];

let indice = 0;

function mostrarProximaConversa() {
  const saida = document.getElementById("saida");

  if (indice < diario.length) {
    saida.innerHTML += diario[indice] + "<br>";
    indice++;

    // quando terminar, mostra o botão continuar
    if (indice === diario.length) {
      document.getElementById("btnContinuar").style.display = "inline-block";
    }
  }
}

function continuarDiario() {
  alert("Aqui você pode continuar a história, promessas, futuro, ou outro texto seu 💌");
}
