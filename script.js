const form = document.querySelector("form")
const positions= document.querySelectorAll('.box')
const id = document.querySelector("#Name")
const container= document.querySelector("#title")
const again = document.querySelector('#again')
const yes = document.querySelector('#oui')
const no = document.querySelector('#non')
console.log (positions)
const player = "❌"
const bot = "🟢"
let playerScore = 0
let botScore = 0
let playerInGame = player
let nom = ""

// Afficher l'erreur 
const displayErrors = (message) =>{
    let displayError = document.querySelector(".Error")
    const p = document.createElement("p")
    displayError.innerHTML=""
    p.innerText = message
    displayError.insertAdjacentElement('beforeend',p)
}

//Mettre son pseudo
const onSubmnit = (event) =>{
    const gamer = id.value
    console.log(gamer)
    event.preventDefault();
    console.log('coucou submit');
    container.innerText= gamer.toUpperCase() + '  VS  BOTH'
    nom = gamer.toUpperCase()
    console.log(nom)
    id.value = ""
    id.style.visibility = 'hidden'
}


//Verifier le gagnant
const winner=() =>{ 
            if ((positions[0].innerText === player && positions[1].innerText === player && positions[2].innerText === player ) ||  
                ( positions[3].innerText === player && positions[4].innerText === player && positions[5].innerText === player) ||
                ( positions[6].innerText === player && positions[7].innerText === player && positions[8].innerText === player) ||
                ( positions[0].innerText === player && positions[4].innerText === player && positions[8].innerText === player) ||
                ( positions[2].innerText === player && positions[4].innerText === player &&  positions[6].innerText === player) ||
                ( positions[0].innerText === player && positions[3].innerText === player &&  positions[6].innerText === player) ||
                ( positions[1].innerText === player && positions[4].innerText === player &&  positions[7].innerText === player) ||
                ( positions[2].innerText === player && positions[5].innerText === player &&  positions[8].innerText === player)
                ){
                    console.log("tout va bien")
                    playerScore = playerScore + 1
                    displayErrors( nom + ' A GAGNE ' + " : " + nom + ' = ' + playerScore  + ' BOTH = ' + botScore )
                }else if((positions[0].innerText === bot  && positions[1].innerText === bot && positions[2].innerText === bot  ) ||  
                ( positions[3].innerText === bot  && positions[4].innerText === bot  && positions[5].innerText === bot ) ||
                ( positions[6].innerText === bot  && positions[7].innerText === bot  && positions[8].innerText === bot ) ||
                ( positions[0].innerText === bot  && positions[4].innerText === bot  && positions[8].innerText === bot ) ||
                ( positions[2].innerText === bot  && positions[4].innerText === bot &&  positions[6].innerText === bot ) ||
                ( positions[0].innerText === bot && positions[3].innerText === bot &&  positions[6].innerText === bot) ||
                ( positions[1].innerText === bot && positions[4].innerText === bot &&  positions[7].innerText === bot) ||
                ( positions[2].innerText === bot && positions[5].innerText === bot &&  positions[8].innerText === bot )
                ){
                    console.log("tout va bien")
                    botScore = botScore + 1
                    displayErrors("LE BOTH A GAGNE" + " : " + ' BOTH = ' + botScore + ' ' + nom + ' = ' + playerScore)
                }else if ( positions[0].innerText !== '' && 
                            positions[1].innerText  !== ''&& 
                            positions[2].innerText  !== ''&&  
                            positions[3].innerText !== '' &&  
                            positions[4].innerText !== '' &&  
                            positions[5].innerText  !== ''&&  
                            positions[6].innerText  !== ''&&  
                            positions[7].innerText !== '' ) {
                    displayErrors('Egalité')
                }
                    
    }


    //Afficher ou cacher les parties
    const displayText = (id) => {
    if(document.getElementById(id).style.visibility === "hidden")
    {
        document.getElementById(id).style.visibility = "visible";
    }
    else
    {
        document.getElementById(id).style.visibility = "hidden";
    }
    return true;
    }


//Jeu du both
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


//Mettre des pions dans les cases
const playerGame = (event) => {
    let playBox = event.target
    console.log(playBox)
    if (container.innerText === "") {
        displayErrors("Vous devez entrer votre nom s'il vous plaît")
        onSubmnit
    } else if (nom === 'LUCA' ) {
            playBox.innerText = player
            BotGame()
            console.log('je suis luca')
            winner()
    }else {
        if (playBox.innerText === '') {
            playBox.innerText = player
            BotGame()
            winner()
        } else {
            displayErrors('Vous ne pouvez pas jouer dans cette case ! Choisissez en une autre')
            console.log('sa ne marche pas')
        }
    }
    } 


const game = () => {
    positions.forEach(box => {
        box.addEventListener('click', playerGame)
    })
}


const botGamer = () => {
    BotGame()
    game()
}


displayText('play')
form.addEventListener("submit",onSubmnit)
no.addEventListener('click',botGamer)
yes.addEventListener('click',game)
again.addEventListener('click', () =>{
    positions.forEach(box => {
        box.innerText = ""
    })
    game()
    displayText('play')
    displayErrors("")
})

