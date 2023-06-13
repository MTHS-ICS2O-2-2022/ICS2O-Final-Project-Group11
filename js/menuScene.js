/* global Phaser */

// Copyright (c) 2023 Charlotte Jhu All rights reserved
//
// Created by: Charlotte Jhu
// Created on: June 2023
// This is the Menu Scene

// Hi self, resize image and then put back into assets folder (1920, 1080)

/**
 * This class is the Menu Scene.
 */
class MenuScene extends Phaser.Scene {
    /**
     * This method is the constructor.
     */
    constructor() {
      super({ key: "menuScene" })
  
      this.menuSceneBackgroundImage = null
    }
  
    /**
     * Can be defined on your own Scenes.
     * This method is called by the Scene Manager when the scene starts,
     *  before preload() and create().
     * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
     */
    init(data) {
      this.cameras.main.setBackgroundColor("ffffff")
    }
  
    /**
     * Can be defined on your own Scenes.
     * Use it to load assets.
     */
    preload () {
      console.log("Menu Scene")
      this.load.image("menuSceneBackground", "./assets/menuSceneImage.avif")
    }
  
    /**
     * Can be defined on your own Scenes.
     * Use it to create your game objects.
     * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
     */
    create(data) {
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, "menuSceneBackground").setScale(2.0)
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2
    this.menuSceneBackgroundImage.setInteractive({ useHandCursor: true })
    this.menuSceneBackgroundImage.on("pointerdown", () => this.clickButton())
    }
  
    /**
     * Should be overridden by your own Scenes.
     * This method is called once per game step while the scene is running.
     * @param {number} time -The current time.
     * @param {number} delta - The delta time in ms since the last frame.
     */
    update(time, delta) {
      //pass
    }
  
    clickButton() {
      location.href="./gameScene.html"
    }
  }
  
  export default MenuScene