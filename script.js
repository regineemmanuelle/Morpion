const form = document.querySelector("form")
const positions= document.querySelectorAll('.box')
const container= document.querySelector("p")
let pion = ''
const player = "X"
const bot = "o"

//Put the name of the player
const onSubmnit = (event) =>{
    const player = document.querySelector("#Name")
    const gamer = player.value
    console.log(gamer)
    event.preventDefault();
    console.log('coucou submit');
    container.innerText= gamer
}
form.addEventListener("submit",onSubmnit)

// Display errors of the players
const Errors = (Message) =>{
    let displayError = document.querySelector(".Error")
    const p = document.createElement("p")
    p.innerText = Message
    displayError.insertAdjacentElement('beforeend',p)
}

//Continious of the game
const game = () =>{
    
    
}

//Put the croos or the cycle
const play = (event) => {
    pion = event.target
    if (pion.innerText !== '') {
        Errors('Vous ne pouvez pas jouer dans cette case ! Choisissez en une autre')
    } else {
        pion.innerText  = player
}
}
positions.forEach(box => {
    box.addEventListener('click',play)
    if (box.innerText === player) {
        box.innerText = bot
    }
});


