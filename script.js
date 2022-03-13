const form = document.querySelector("form")
const positions= document.querySelectorAll('.box')
const id = document.querySelector("#Name")
const container= document.querySelector("p")
console.log (positions)
const player = "X"
const bot = "o"
let playerScore = 0
let botScore = 0
let playerInGame = player

//Put the name of the player
const onSubmnit = (event) =>{
    const gamer = id.value
    console.log(gamer)
    event.preventDefault();
    console.log('coucou submit');
    container.innerText= gamer
}

// Display errors of the players
const displayErrors = (message) =>{
    let displayError = document.querySelector(".Error")
    const p = document.createElement("p")
    displayError.innerHTML=""
    p.innerText = message
    displayError.insertAdjacentElement('beforeend',p)
}

//Contains a values
const switchPlayer = () => {
}

//put the game of the bot
const BotGame = () =>{
    let number = parseInt(9)
    let otherplayer =  parseInt(Math.random() * (number - 0) + 0);
    console.log(otherplayer)
    while (positions[otherplayer].innerText !== "") {
        console.log("nouveau choix")
        otherplayer =  parseInt(Math.random() * (number - 0) + 0)
    }
    positions[otherplayer].innerText = bot
    number = number- 2
    console.log(number)
}

//say the winner
const winner=() =>{
    for (let i = 0; i < positions.length; i++) {
        if ((positions[0].innerText === player && positions[1].innerText === player && positions[2].innerText === player ) ||  
            ( positions[3].innerText === player && positions[4].innerText === player && positions[5].innerText === player) ||
            ( positions[6].innerText === player && positions[7].innerText === player && positions[8].innerText === player) ||
            ( positions[0].innerText === player && positions[4].innerText === player && positions[8].innerText === player) ||
            ( positions[2].innerText === player && positions[4].innerText === player &&  positions[6].innerText === player) ||
            ( positions[0].innerText === player && positions[3].innerText === player &&  positions[6].innerText === player) ||
            ( positions[1].innerText === player && positions[4].innerText === player &&  positions[7].innerText === player) ||
            ( positions[2].innerText === player && positions[5].innerText === player &&  positions[8].innerText === player)
            ){
                displayErrors('vous avez gagner')
                console.log("tout va bien")
            }else if (
                (positions[0].innerText === bot  && positions[1].innerText === bot  && positions[2].innerText === bot  ) ||  
                ( positions[3].innerText === bot  && positions[4].innerText === bot  && positions[5].innerText === bot ) ||
                ( positions[6].innerText === bot  && positions[7].innerText === bot  && positions[8].innerText === bot ) ||
                ( positions[0].innerText === bot  && positions[4].innerText === bot  && positions[8].innerText === bot ) ||
                ( positions[2].innerText === bot  && positions[4].innerText === bot  &&  positions[6].innerText === bot ) ||
                ( positions[0].innerText === bot && positions[3].innerText === bot &&  positions[6].innerText === bot) ||
                ( positions[1].innerText === bot && positions[4].innerText === bot &&  positions[7].innerText === bot) ||
                ( positions[2].innerText === bot && positions[5].innerText === bot &&  positions[8].innerText === bot)
                    ){
                        displayErrors("l'odinateur a gagné")
                        console.log("tout va bien")
                    }
        }
    }


//put the player game
const playerGame = (event) => {
    if (container.innerText === "") {
        displayErrors("Vous devez entrer votre nom s'il vous plaît")
        onSubmnit
    }else{
        let playBox = event.target
        console.log(playBox)
        if (playBox.innerText === '') {
            playBox.innerText = player
            BotGame()
            winner()
        } else {
            displayErrors('Vous ne pouvez pas jouer dans cette case ! Choisissez en une autre')
        }
    }

}
form.addEventListener("submit",onSubmnit)
positions.forEach(box => {
    box.addEventListener('click',playerGame)
})


