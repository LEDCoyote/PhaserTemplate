'use strict';
// Template for Menu Scene
class MenuScene extends Phaser.Scene {
  
  constructor () 
  {
    super('menuScene');
  }

  preload () { }

  create () 
  {
    this.stateWaitForInput = true;
    this.messageText = this.add.text(w/2, h/2, "Title of the Game!\nPress <space> to start.",
      { fontSize: '32px', fill: '#fff' });
    this.messageText.setOrigin(0.5,0.5);
    this.input.keyboard.on('keydown_SPACE', function() {
      this.stateWaitForInput = false;
    },this);
  }

  update () 
  {
    if (!this.stateWaitForInput)
    {
      this.scene.start('gameplayScene');
    }
  }
}
