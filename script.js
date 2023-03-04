'use strict';

//Functions
const rollDice = () => {
  const diceNumber = Math.trunc(1 + Math.random() * 6)
  diceEl.src = `assets/dice-${diceNumber}.png`
  diceEl.classList.remove('hidden')

  if (diceNumber === 1) {
    currentNumber = 0
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    document.getElementById(`current--${activePlayer}`).textContent = currentNumber.toString()
    activePlayer = activePlayer === 0 ? 1 : 0
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active')
  } else {
    currentNumber += diceNumber
    document.getElementById(`current--${activePlayer}`).textContent = currentNumber.toString()
  }

}

//Selected elements
const diceEl = document.querySelector('.dice')
const rollDiceBtn = document.querySelector('.btn.btn--roll')

//Event listeners
rollDiceBtn.addEventListener('click', rollDice)

//State
const scores = [0, 0]
let currentNumber = 0
let activePlayer = 0