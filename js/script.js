// Copyright (c) 2023 Charlotte Jhu All rights reserved
//
// Created by: Charlotte Jhu
// Created on: June 2023

"use strict"

// place ships
let computerShipPlacement = Math.floor(Math.random() * 2) + 1
console.log("Computer: " + computerShipPlacement)
let playerShipPlacement = Math.floor(Math.random() * 2) + 1
console.log("Player: " + playerShipPlacement)

// desirably, this would have created a delay allowing all instructions to be read, but it doesn't work
//  from: https://www.sitepoint.com/delay-sleep-pause-wait/
// function sleep(milliseconds) {
// const date = Date.now()
// let currentDate = null
// do {
// currentDate = Date.now()
// } while (currentDate - date < milliseconds)
// }

window.onload = function () {
  // choose whose turn it is randomly
  let startingPlayer = Math.floor(Math.random() * 2)

  if (startingPlayer / 2 == 0) {
    document.getElementById("instructions").innerHTML =
      "It's your turn, click on one of the computer's spaces to send a rocket there."
    document.getElementById("player-ship-placement").innerHTML =
      "Your ship is in space " + playerShipPlacement
  } else {
    document.getElementById("instructions").innerHTML =
      "It's the computer's turn, wait for the computer to send a rocket to one of your spaces."
    // sleep(2000)
    computerTurn()
  }
}

function computerButton1() {
  document.getElementById("computer-1").checked = true
  playerTurn()
}

function computerButton2() {
  document.getElementById("computer-2").checked = true
  playerTurn()
}

function computerTurn() {
  // sleep(2000)
  // computer plays it's turn
  let computerChoice = Math.floor(Math.random() * 2) + 1
  console.log("Computer chose: " + computerChoice)

  if (computerChoice == 1) {
    document.getElementById("player-1").checked = true
    computerHitOrMiss()
  } else if (computerChoice == 2) {
    document.getElementById("player-2").checked = true
    computerHitOrMiss()
  }
}

function computerHitOrMiss() {
  // check to see if computer hit or missed player's ship
  const playerSquare1Checked = document.getElementById("player-1").checked
  const playerSquare2Checked = document.getElementById("player-2").checked

  if (playerSquare1Checked) {
    if (playerShipPlacement == 1) {
      document.getElementById("instructions").innerHTML =
        "The computer hit your ship!"
      endOfGameComputer()
    } else if (playerShipPlacement !== 1) {
      document.getElementById("instructions").innerHTML = "The computer missed"
      document.getElementById("player-1").disabled = true
      // sleep(2000)
      playerTurn()
    }
  } else if (playerSquare2Checked) {
    if (playerShipPlacement == 2) {
      document.getElementById("instructions").innerHTML =
        "The computer hit your ship!"
      endOfGameComputer()
    } else if (playerShipPlacement !== 2) {
      document.getElementById("instructions").innerHTML = "The computer missed"
      document.getElementById("player-2").disabled = true
      // sleep(2000)
      playerTurn()
    }
  }
}

function playerTurn() {
  // player plays it's turn and program checks to see if they hit or missed computer's ship
  const computerSquare1Checked = document.getElementById("computer-1").checked
  const computerSquare2Checked = document.getElementById("computer-2").checked

  if (computerSquare1Checked) {
    if (computerShipPlacement == 1) {
      document.getElementById("instructions").innerHTML =
        "You hit the computer's ship!"
      endOfGamePlayer()
    } else if (computerShipPlacement !== 1) {
      document.getElementById("instructions").innerHTML = "You missed"
      document.getElementById("computer-1").disabled = true
      // sleep(2000)
      computerTurn()
    }
  } else if (computerSquare2Checked) {
    if (computerShipPlacement == 2) {
      document.getElementById("instructions").innerHTML =
        "You hit the computer's ship!"
      endOfGamePlayer()
    } else if (computerShipPlacement !== 2) {
      document.getElementById("instructions").innerHTML = "You missed"
      document.getElementById("computer-2").disabled = true
      // sleep(2000)
      computerTurn()
    }
  }
}

function endOfGameComputer() {
  // end of game
  document.getElementById("game-over").innerHTML =
    "Game Over! The computer won! Reload to play again."
}

function endOfGamePlayer() {
  // end of game
  document.getElementById("game-over").innerHTML =
    "Game Over! You won! Relaod to play again."
}
