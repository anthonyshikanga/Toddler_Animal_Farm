var game = new Phaser.Game(640, 360, Phaser.AUTO);

var GameState = {
  preload: function(){
   this.load.image('background', 'assets/images/');
   this.load.image('chicken', 'assets/images/');
   this.load.image('horse', 'assets/images/');
   this.load.image('pig', 'assets/images/');
   this.load.image('sheep','assets/images/');
  },
  create: function() {
   this.background = this.game.add.sprite(0, 0, 'background');

   this.chicken = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'chicken');
   this.chicken.anchor.setTo(0.5);

  },
  update: function() {

  }
};

game.state.add('GameState', GameState);
game.state.start('GameState');



