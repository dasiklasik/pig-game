'use strict';

//Functions

const init = () => {
  scores = [0, 0]
  currentNumber = 0
  isPlaying = true
  activePlayer = 0

  document.querySelector('.player--0').classList.remove('player--winner')
  document.querySelector('.player--1').classList.remove('player--winner')
  document.querySelector('.player--0').classList.add('player--active')
  document.querySelector('.player--1').classList.remove('player--active')
  document.getElementById('score--0').textContent = '0'
  document.getElementById('score--1').textContent = '0'
  diceEl.classList.add('hidden')
}

const changePlayer = () => {
  currentNumber = 0
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
  document.getElementById(`current--${activePlayer}`).textContent = currentNumber.toString()
  activePlayer = activePlayer === 0 ? 1 : 0
  document.querySelector(`.player--${activePlayer}`).classList.add('player--active')
}

const rollDice = () => {
  if (!isPlaying) return

  const diceNumber = Math.trunc(1 + Math.random() * 6)
  diceEl.src = `assets/dice-${diceNumber}.png`
  diceEl.classList.remove('hidden')

  if (diceNumber === 1) {
    changePlayer()
  } else {
    currentNumber += diceNumber
    document.getElementById(`current--${activePlayer}`).textContent = currentNumber.toString()
  }
}

const holdScore = () => {
  if (!isPlaying) return

  scores[activePlayer] += currentNumber
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer].toString()
  if (scores[activePlayer] < 100) {
    changePlayer()
  } else {
    isPlaying = false
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    diceEl.classList.add('hidden')
    holdBtn.disabled = true
    rollDiceBtn.disabled = true
  }
}

//Selected elements
const diceEl = document.querySelector('.dice')
const rollDiceBtn = document.querySelector('.btn.btn--roll')
const holdBtn = document.querySelector('.btn.btn--hold')
const resetBtn = document.querySelector('.btn.btn--new')

//Event listeners
rollDiceBtn.addEventListener('click', rollDice)
holdBtn.addEventListener('click', holdScore)
resetBtn.addEventListener('click', init)

//State
let scores, currentNumber, activePlayer, isPlaying

init()