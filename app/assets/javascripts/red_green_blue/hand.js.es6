class Hand {
  constructor(player){
    this.player = player;
    this.cards = [];
    this.draw_cards();
  }
  draw_cards(){
    //Randomly initialize card objects to this.cards
    var colors = ["red","green","blue"];
    for (var i = 0; i <= 5; i++) {
      this.cards.push(new Card(colors[Math.floor(Math.random() * 3)], this));
    }   
  }

  // hand.element
  get element(){
    if (this.player.name === "me"){
      return $(".hand.my_hand")[0]
    }
    else{
      return $(".hand.opponent_hand")[0]
    }
  }
}


