let prevNumber = 0

const rollDice = () => {
    const diceImage = document.querySelector('#dice-image')
    const prevNumberElement = document.querySelector('#prev-number')
    
    const rolledNumber = Math.floor(Math.random() * 6) + 1
    diceImage.src = `./img/${rolledNumber}.png`
}

const diceI = document.querySelector('#dice-image')
diceI.addEventListener('click', rollDice)