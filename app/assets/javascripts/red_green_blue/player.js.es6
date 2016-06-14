//= require ./hand

class Player {
  constructor(game, name){
    this.game = game;
    this.name = name;
    this.hand = new Hand(this);
  }  

}