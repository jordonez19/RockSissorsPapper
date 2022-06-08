const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice; 
let computerChoice; 
let result


possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click',(e) => {
    userChoice = e.target.id 
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3)+1
    console.log(randomNumber)

    if(randomNumber === 1){
        computerChoice = 'rock'
    }
    if(randomNumber === 2){
        computerChoice = 'sissors'
    }
    if(randomNumber === 3){
        computerChoice = 'papper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice === userChoice){
        result = 'it is a draw'
    }
    if(computerChoice === 'rock' && userChoice === 'papper'){
        result = 'you win'
    }
    if(computerChoice === 'rock' && userChoice === 'sissors'){
        result = 'you lost'
    }
    if(computerChoice === 'papper' && userChoice === 'rock'){
        result = 'you lost'
    }
    if(computerChoice === 'papper' && userChoice === 'sissors'){
        result = 'you win'
    }
    if(computerChoice === 'sissors' && userChoice === 'papper'){
        result = 'you lost'
    }
    if(computerChoice === 'sissors' && userChoice === 'rock'){
        result = 'you win'
    }
    resultDisplay.innerHTML = result

}