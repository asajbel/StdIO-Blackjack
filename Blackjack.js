function print (text, where = "output") {
  document.getElementById(where).innerHTML += "<p>" + text + "</p>";
}

function read(e, value, id) {
  if (e.keyCode === 13) {
    e.preventDefault();
    playerAction(value);
    document.getElementById(id).value = '';
  }
}

function newDeck() {
  var cards = [];
  var suits = ['hearts','spades','diamonds','clubs'];
  for (var i = 0; i < 4; i++) {
    for (var j = 1; j <= 13; j++){
      switch (j){
        case 1:
          cards.push([j,'Ace',suits[i]]);
          break;
        default:
          cards.push([j,j,suits[i]]);
          break;
        case 11:
          cards.push([10,'Jack',suits[i]]);
          break;
        case 12:
          cards.push([10,'Queen',suits[i]]);
          break;
        case 13:
          cards.push([10,'King',suits[i]]);
          break;
        }
    }
  }
  return cards;
}

var deck = newDeck();

function shuffle() {

}

function playerAction(bet) {
  var b = bet[0];
  print(b);
  switch (b){
    case "d":
    break;
    case "h":
    break;
    case "s":
    break;
    case '/':
    break;
  }
}
