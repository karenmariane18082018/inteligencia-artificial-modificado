const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Se você pudesse entrar no mundo de um anime famoso por um dia, qual seria sua primeira reação?",
        alternativas: [
            {
                texto: "Ficar emocionado por estar em um mundo tão vibrante e cheio de aventuras!",
                afirmacao: "Sempre sonhou em viver as emoções intensas de um anime na vida real."
            },
            {
                texto: "Sentir um pouco de medo, pois as coisas podem ser muito diferentes do que esperava.",
                afirmacao: "Inicialmente ficou apreensivo com as possíveis diferenças entre o mundo real e o anime."
            }
        ]
    },
    {
        enunciado: "Ao se deparar com um dilema sério, como você escolheria resolver?",
        alternativas: [
            {
                texto: "Seguiria os conselhos dos personagens principais do anime que você mais gosta.",
                afirmacao: "Acredita que os personagens dos animes têm muito a ensinar sobre coragem e determinação."
            },
            {
                texto: "Pensaria em uma solução baseada em suas próprias experiências e conhecimentos.",
                afirmacao: "Prefere confiar na própria intuição e raciocínio para resolver problemas."
            }
        ]
    },
    {
        enunciado: "Se pudesse ter um poder especial de um personagem de anime, qual seria e por quê?",
        alternativas: [
            {
                texto: "Escolheria um poder que lhe permitisse proteger seus amigos e entes queridos.",
                afirmacao: "Sempre se inspirou nos personagens que sacrificam tudo para proteger quem amam."
            },
            {
                texto: "Optaria por um poder que lhe desse a capacidade de explorar novos lugares e aventuras.",
                afirmacao: "Ama a ideia de poder explorar mundos fantásticos e desconhecidos."
            }
        ]
    },
    {
        enunciado: "Como você acha que os animes impactam sua vida?",
        alternativas: [
            {
                texto: "Eles te inspiram a ser uma pessoa melhor e a nunca desistir dos seus sonhos.",
                afirmacao: "Acredita que os animes têm o poder de motivar e ensinar importantes lições de vida."
            },
            {
                texto: "São uma forma divertida de escapar da realidade, mas não têm um impacto profundo em sua vida.",
                afirmacao: "Vê os animes como uma forma de entretenimento leve e relaxante."
            }
        ]
    },
    {
        enunciado: "Se você pudesse criar um novo anime, qual seria o enredo principal?",
        alternativas: [
            {
                texto: "Um grupo de amigos descobrindo poderes mágicos em um mundo alternativo.",
                afirmacao: "Sempre sonhou em criar uma história cheia de mistérios e aventuras emocionantes."
            },
            {
                texto: "Uma jornada de autoconhecimento e crescimento pessoal em um cenário futurista.",
                afirmacao: "Ama a ideia de explorar temas profundos e filosóficos através de personagens cativantes."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em seu mundo de animes...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
