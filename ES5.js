var Jyanken = (function() {
  function Jyanken(hand) {
    this.hand = hand;
  }
  jyanken.prototype.poi = function() {
    return this.hand = Math.floor(Math.random() * 3);
  };
  jyanken.prototype.judge = function(your) {
    var judgment = (computer_hand - human_hand + 3) % 3;
    if(judgment == 0) {
      return "drow";
    } else if(judgment == 1) {
      return "win";
    } else {
      return "lose";
    }
  };
  return Jyanken;
})();
