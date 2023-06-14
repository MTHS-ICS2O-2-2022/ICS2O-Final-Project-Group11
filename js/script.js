// Copyright (c) 2023 Charlotte Jhu All rights reserved
//
// Created by: Charlotte Jhu
// Created on: June 2023

'use strict'

window.onload = function() {
   let startingPlayer = Math.floor(Math.random() * 2)

    if (startingPlayer/2 == 0) {
        document.getElementById("instructions").innerHTML = "It's your turn, click on one of the computer's spaces to send a rocket there."
        playerTurn()
    } else {
    document.getElementById("instructions").innerHTML = "It's the computer's turn, wait for the computer to send a rocket to one of your spaces."

    }
}

function playerTurn() {
    const computerSquare1 = document.getElementById("computer-1").checked
    const computerSquare2 = document.getElementById("computer-2").checked
    const computerSquare3 = document.getElementById("computer-3").checked
    const computerSquare4 = document.getElementById("computer-4").checked

    if (computerSquare1 === true) {
        alert ("you checked square 1")
    } else if (computerSquare2 == true) {
        alert ("you checked square 2")
    } else if (computerSquare3 == true) {
        alert ("you checked square 3")
    } else if (computerSquare4 == true) {
        alert ("you checked square 4")
    }
}