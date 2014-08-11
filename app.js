
$(document).ready(function() {
  //Number of Tiles
  var Not = 9 
  var WinNumbers = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8],[3,6,9], [1,5,9], [3,5,7]]

  for(var i = 0; i < Not; i++) {
    var div = document.createElement('div');
    div.id = i;
    div.className = "tile"
    div.onclick = null
    $('#board').append(div);
    
  }

  $('div').on('click', function(event) {
    event.target.innerHTML = 'X';
    event.target.clicked = true
    console.log(event.target);
  });

});



//Making the Players

var p1 = {
    mark: 'X',
    name: 'Player 1',
    style: 'style',
    score_el 'player1_wins',
    wins: 0
};


