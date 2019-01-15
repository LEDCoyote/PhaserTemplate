'use strict';
// Template for Preload Scene
let PreloadScene = new Phaser.Class({
  Extends: Phaser.Scene,
  
  initialize: function () 
  {
    Phaser.Scene.call(this, { key: 'preloadScene' });
  },

  preload: function () 
  {
    //// Progress Update Items ///////////
    let progressBar = this.add.graphics();
    let progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240,270,320,50);
    
    let width = this.cameras.main.width;
    let height = this.cameras.main.height;
    let loadingText = this.make.text({
      x: width/2,
      y: height/2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    });
    loadingText.setOrigin(0.5,0.5);
    
    let percentText = this.make.text({
      x: width/2 - 3,
      y: height/2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    percentText.setOrigin(0.5,0.5);
    
    let assetText = this.make.text({
      x: width/2,
      y: height/2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    assetText.setOrigin(0.5,0.5);
    
    //////////////////////////////////////////////////////////////
    //~~~~~~~~~~~~~~~~~~~~ LOAD ASSETS HERE ~~~~~~~~~~~~~~~~~~~~//
    
    
    this.load.image('logo','gfx/Coyote_logo.png');
    
    
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    //////////////////////////////////////////////////////////////
    
    
    //// Listeners for progress updates ////
    this.load.on('progress', function(value) {
      console.log(value);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250,280,300*value,30);
      percentText.setText(parseInt(value*100) + '%');
    });
    
    this.load.on('fileprogress', function(file) {
      console.log(file.src);
      assetText.setText('Loading asset: ' + file.key);
    });
    
    this.load.on('complete', function() {
      console.log('complete');
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
    });
  },

  create: function () 
  {
    // after loading assets, display logo
    this.logo = this.add.image(400,300,'logo');
    
    // logo fades after 1.5 s
    this.doFade = false;
    this.time.delayedCall(1500,
      function() {
        this.doFade = true;
      },
      [],
      this);
  },

  update: function () 
  {
    let a = this.logo.alpha;
    if (a <= 0)
    {
      // stop fade, kick off initial scene
      this.doFade = false;
      this.scene.start('menuScene');
    }
    
    // fade logo
    if (this.doFade)
    {
      this.logo.setAlpha(a - 0.01);
    }
  },
});
