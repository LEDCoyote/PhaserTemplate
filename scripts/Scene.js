'use strict';
// Template for Scene Scene

function SceneInit() 
{
  Phaser.Scene.call(this, { key: 'sceneScene' });
}

function ScenePreload() 
{
  
}

function SceneCreate() 
{
  
}

function SceneUpdate() 
{
  
}

let SceneScene = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: SceneInit,
  preload: ScenePreload,
  create: SceneCreate,
  update: SceneUpdate
})