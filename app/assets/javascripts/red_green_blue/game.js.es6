//= require ./player

class Game {
  constructor(){
    this.play_area = new PlayArea();
  }  
  setup_game(){
    var me = new Player(this, "me");
    var opponent = new Player(this, "opponent");
  }
}
