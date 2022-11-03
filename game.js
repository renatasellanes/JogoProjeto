// Selecionando os componentes:

let container = document.querySelector("#container");
let cactosBig = document.querySelector("#cactosBig");
let passaro = document.querySelector("#passaro");
let ceu = document.querySelector("#ceu");
let terra = document.querySelector("#terra");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");


// Declarando as variaveis do score:
let interval = null;
let playerScore = 0;

// função Score:
let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
}

interval = setInterval(scoreCounter,200);

//StartGame

window.addEventListener("keydown", (start)=> {
    console.log(start.code)

    if(start.code == "AltLeft")
    {
        gameOver.style.display = "none";
        cactosBig.classList.add("movimentoCactusBig");
        passaro.classList.add("movimentoPassaro");
        terra.firstElementChild.style.animation == "terraAnimate 1.5s linear infinite";
        ceu.firstElementChild.style.animation == "ceuAnimate 50s linear infinite";

        //score
        let playerScore = 0;
        interval = setInterval(scoreCounter, 200);

    }
});
// Jump Dino
const dino = document.querySelector("#dino");

const jump = () => {
    dino.querySelector.add(".jumpDino")

    setTimeout (() => {
        dino.querySelector.remove(".jumpDino"), 500
    })
}

document.addEventListener("onclick", jump);
