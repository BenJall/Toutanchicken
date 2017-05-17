function Gameover() {}

Gameover.prototype.create = function () {
  var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, 'Gameover', {
    font: '42px Arial', fill: '#ffffff', align: 'center'
  });
  text.anchor.set(0.5);

  this.input.onDown.add(this.onInputDown, this);

  this.game.physics.arcade.gravity.y = 50;

  var menu = this.game.add.button(this.game.width * 0.5, this.game.height * 0.8, 'menu', backToMenu, this);
  menu.anchor.set(0.5);

  plume = this.add.sprite(this.game.width * 0.5, 0, 'plume');
  this.physics.enable(plume);
  plume.anchor.set(0.5);
  plume.animations.add('move', [0,1,2,3], 7, true);
};

Gameover.prototype.update = function () {
	plume.animations.play('move');
};

function backToMenu(){
	this.game.state.start('menu');
}

Gameover.prototype.onInputDown = function () {
  // this.game.state.start('menu');
};

module.exports = Gameover;
