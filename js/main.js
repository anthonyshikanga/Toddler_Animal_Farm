var game = new Phaser.Game(640, 360, Phaser.AUTO);

var GameState = {
  preload: function(){
   this.game.load.image('background', 'assets/images/');
   this.game.load.image('chicken', 'assets/images/');
   this.game.load.image('horse', 'assets/images/');
   this.game.load.image('arrow', 'assets/images/')
   this.game.load.image('pig', 'assets/images/');
   this.game.load.image('sheep','assets/images/');
  },
  create: function() {
   this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

   this.scale.pageAlignHorizontally = true;
   this.scale.pageAlignVertically = true;

   this.scale.setScreenSize(true);


   this.background = this.game.add.sprite(0, 0, 'background');

   this.chicken = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'chicken');
   this.chicken.anchor.setTo(0.5);
  

   this.horse = this.game.add.sprite(120, 10, 'horse');
   this.horse.scale.setTo(0.5);

   this.pig = this.game.add.sprite(500, 300, 'pig');
   this.pig.anchor.setTo(0.5);
  
   this.leftArrow = this.game.add.sprite(60, this.game.world.centerY, 'arrow');
   this.leftArrow.anchor.setTo(0.5);
   this.leftArrow.scale.x = -1;
   this.leftArrow.customParams = {direction: -1};

   this.leftArrow.inputEnabled = true;
   this.leftArrow.input.pixelPerfectClick = true;
   this.leftArrow.events.onInputDown.add(this.switchAnimal, this);

   this.rightArrow = this.game.add.sprite(580, this.game.world.centerY, 'arrow');
   this.rightArrow.anchor.setTo(0.5);
   this.rightArrow.customParams = {direction: 1};

   this.rightArrow.inputEnabled = true;
   this.rightArrow.input.pixelPerfect = true;
   this.rightArrow.events.onInputDown.add(this.switchAnimal, this);




  },
  update: function() {

  },
  switchAnimal: function(sprite, event) {
   console.log('move animal');
},
  animateAnimal: function(sprite, event){
   console.log('animate animal');
}
};

game.state.add('GameState', GameState);
game.state.start('GameState');



