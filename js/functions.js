let prevNumber = 0

const rollDice = () => {
    const diceImage = document.querySelector('#dice-image')
    const prevNumberElement = document.querySelector('#prev-number')
    
    const rolledNumber = Math.floor(Math.random() * 6) + 1
    diceImage.src = `./img/${rolledNumber}.png`

    if (prevNumber !== null) {
        prevNumberElement.textContent = prevNumber
    }
    prevNumber = rolledNumber
}

const diceI = document.querySelector('#dice')
diceI.addEventListener('click', rollDice)