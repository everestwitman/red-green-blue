//= require ./game 

class Card {
  constructor(color, hand){
    this.color = color;
    this.hand = hand;
    this.draw_in_hand();
    this.register_click_listener();
  }

  to_html(){
    //Returns an HTML string for the card
    return `<div class="card ${this.color}_card"></div>`;
  }

  register_click_listener(){
    $(this.element).on('click', event => {
      console.log(this.element);
     if (this.can_play()){
       this.play_card();
     }
     else{
      alert("This is not a legal play. You can only play a card of a different color from the one on the table.");
     }
    });
  }

  play_card(){
    this.game.play_area.current_card = this;
    
    //Remove card from hand's list
    for (var i = this.hand.cards.length - 1; i >= 0; i--) {
      if (this.hand.cards[i] = this) {
        delete this.hand.cards[i];

    //Register these changes in the DOM
    $(this.element).remove();
    $('.table .card').replaceWith(this.game.play_area.current_card.to_html());
      }
    }
  }

  can_play(){
    //ERROR game is undefined
    if (this.game.play_area.current_card === null) {
      return true;
    }
    else {
      return this.color != this.game.play_area.current_card.color;
    }
    return true;
  }

  draw_in_hand(){
    // write out a DOM node
    $(this.hand.element).prepend(this.to_html());

    // set that DOM node as this.element
    this.element = $(this.hand.element).children()[0];
    

  }

  get game(){
    return this.hand.player.game;
  }
}


