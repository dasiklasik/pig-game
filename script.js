'use strict';

//Functions
const rollDice = () => {
  const diceNumber = Math.trunc(1 + Math.random() * 6)
  diceEl.src = `assets/dice-${diceNumber}.png`
  diceEl.classList.remove('hidden')
  currentNumber = diceNumber
  firstPlayerActive ? currentScore1El.textContent = diceNumber.toString()
    : currentScore2El.textContent = diceNumber.toString()
}

//Selected elements
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