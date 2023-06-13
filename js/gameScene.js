/* global Phaser */

// Copyright (c) 2023 Charlotte Jhu All rights reserved
//
// Created by: Charlotte Jhu
// Created on: June 2023
// This is the Game Scene

class GameScene extends Phaser.Scene {
  
    constructor() {
      super({ key: "gameScene" })
  
      this.background = null
      this.score = 0
      this.winsTitle = null
      this.scoreTextStyle = { font: "65px Arial", fill: "#ffffff", align: "r" }
      this.gameOverTextStyle = { font: "65px Arial", fill: "#ff0000", align: "center" }
      }
  
    init(data) {
      this.cameras.main.setBackgroundColor("ffffff")
    }
  
    preload () {
      console.log("Game Scene")
  
      // images
      this.load.image("gameBackground", "assets/gameBackground.jpg")
      // sound
      this.load.audio("miss", "assets/miss.wav")
      this.load.audio("hit", "assets/hit.wav")
    }
  
    create(data) {
    this.background = this.add.image(0, 0, "gameBackground").setScale(2.0)
    this.background.setOrigin(0, 0)
  
    this.winsTitle = this.add.text(1550, 900, "Wins ", this.scoreTextStyle)
    this.yourWins = this.add.text(1550, 950, "You: " + this.score.toString(), this.scoreTextStyle)
    this.computerWins = this.add.text(1550, 1000, "Computer: " + this.score.toString(), this.scoreTextStyle)
  }
  
    update(time, delta) {
  // called 60 times a second
  // pass (for now)
    }
  }
  
  export default GameScene
