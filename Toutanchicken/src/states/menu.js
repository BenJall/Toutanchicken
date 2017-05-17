function Menu() {}


Menu.prototype.create = function () {

	this.add.sprite(0, 0, 'background');


  var text = this.add.image(this.game.width * 0.5, this.game.height * 0.2, 'gamename');
  text.anchor.set(0.5);

  var niveau1 = this.game.add.button(this.game.width * 0.2, this.game.height * 0.6, 'niveau1', play1, this);
  var niveau2 = this.game.add.button(this.game.width * 0.6, this.game.height * 0.6, 'niveau2', play2, this);

  this.input.onDown.add(this.onInputDown, this);


};

Menu.prototype.update = function () {

};

Menu.prototype.onInputDown = function () {
  // this.game.state.start('game');
};

function play1(){
	this.game.state.start('game');
}
function play2(){
	this.game.state.start('niveau2');
}

module.exports = Menu;
