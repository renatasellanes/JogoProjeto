// Selecionando os componentes:

let container = document.querySelector("#container");
let dino = document.querySelector("#dino");
let cactosBig = document.querySelector("#cactosBig");
let ceu = document.querySelector("#ceu");
let terra = document.querySelector("#terra");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");


// Declarando as variaveis do score:
let interval = 0;
let playerScore = 0;

// função Score:
const scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
}


//StartGame

window.addEventListener("keydown", (start)=> {


    if(start.code == "Enter")
    {
        gameOver.style.display = "none";
        cactosBig.classList.add("movimentoCactusBig");
        terra.classList.add("moviemntaTerra");
        ceu.classList.add("movimentaCeu");

        //score
        let playerScore = 0;
        interval = setInterval(scoreCounter, 200);

    }

});
// Jump Dino
window.addEventListener("keydown", (e)=>{
    if(e.key == "Enter")
    if(dino.classList != "jumpDino") {
        dino.classList.add("jumpDino");
        setTimeout(()=> {
            dino.classList.remove("jumpDino")

        },500)
    }
});
//Game Over
let result = setInterval(()=> {

    const cactosPosition =+window.getComputedStyle(cactosBig).left.replace('px','')
    const dinoPosition = +window.getComputedStyle(dino).bottom.replace('px', '')

    if ( cactosPosition <=50 && cactosPosition > 0 && dinoPosition <=80) {
        //console.log("Game Over")

        
        gameOver.style.display="block";
        cactosBig.classList.remove("movimentoCactusBig");
        terra.classList.remove("moviemntaTerra");
        ceu.classList.remove("movimentaCeu");
        clearInterval(interval);
        playerScore = 0;

    }

},10);