'use strict';

//Functions
const rollDice = () => {
  const diceNumber = Math.trunc(1 + Math.random() * 6)
  diceEl.src = `assets/dice-${diceNumber}.png`
  diceEl.classList.remove('hidden')

  if (diceNumber === 1) {
    firstPlayerActive =  !firstPlayerActive
    if (firstPlayerActive) {
      player2.classList.remove('player--active')
      player1.classList.add('player--active')
      currentNumber = 0
      currentScore2El.textContent = currentNumber
    } else {
      player1.classList.remove('player--active')
      player2.classList.add('player--active')
      currentNumber = 0
      currentScore1El.textContent = currentNumber
    }
  } else {
    currentNumber += diceNumber
    firstPlayerActive ? currentScore1El.textContent = currentNumber.toString()
      : currentScore2El.textContent = currentNumber.toString()
  }

}

//Selected elements
const player1 = document.querySelector('.player--0')
const player2 = document.querySelector('.player--1')
const score1El = document.getElementById('score--0')
const score2El = document.getElementById('score--1')
const currentScore1El = document.getElementById('current--0')
const currentScore2El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice')
const rollDiceBtn = document.querySelector('.btn.btn--roll')

//Event listeners
rollDiceBtn.addEventListener('click', rollDice)

//State
let currentNumber = 0
let firstPlayerActive = true