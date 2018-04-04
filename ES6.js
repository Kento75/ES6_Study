class Jyanken {
  constructor(hand) {
    this.hand = hand
  }
  poi() {
    this.hand = Math.floor(Math.random() * 3)
  }
  judge(your) {
    const judgment = (compyter_hand - human_hand + 3) % 3
    if(judgment == 0) {
      return "drow"
    } else if(judgment == 1) {
      return "win"
    } else {
      return "lose"
    }
  }
}
