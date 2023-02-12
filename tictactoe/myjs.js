
document.addEventListener('DOMContentLoaded', function() { // making sure the doam is loaded first, after that we can locate elements by ID easily
  
    
 
    for (i=1; i<10; i++){ // for every grid cell, the loop creates a click event listenner that triggers the game function

        document.querySelector(`.c${[i]}`).addEventListener('click', Game)

   
    }
    document.querySelector('#restart').addEventListener('click', Restart) // restart the game with the restart function

    const hideButton = document.getElementById('play');
    const container = document.querySelector('.mid');
    const restartButton = document.getElementById('restart');

    
    hideButton.addEventListener('click', () => { 
     
        container.style.display = 'flex'; // once play button is clicked, the grid appears
        hideButton.style.display= 'none'//  the play button disappears
        restartButton.style.display= 'flex' // restart button appears

      
  
  })
  

  })



  const Player = (name, symbol) => {     // player object
    return { name, symbol }


}

  var action = 1; // this var is initiated to 1 because there will be an if condition between 1 and 2 to chose between X or O
  var game = []

  function Game() {
    if (document.getElementById('name1').value == '' && document.getElementById('name2').value == '')
    { var name1 = 'Player 1'
    var name2 = 'Player 2'} // here, if players don't fill their names in the input fiels, default names are given "player 1 and 2"
    else if (document.getElementById('name1').value == '') // if only one is filled
    {
        var name1 = 'Player 1'
        var name2 = document.getElementById('name2').value
    }

    else if (document.getElementById('name2').value == '') // if only one is filled

    {
        var name2 = 'Player 2'
        var name1 = document.getElementById('name1').value
    }
    else {
    var name1 = document.getElementById('name1').value
    var name2 = document.getElementById('name2').value }  // chosen names
    
    if ( action == 1 && this.innerHTML === '' ) { // if the innerHTML is empty, this means you can play there, and action 1 triggers the X, action 2 triggers the O alternatively
        const player = Player(`${name1}`, 'X');
        game.push(player)
        action = 2; // playing the game, creating objects and pushing them to the array
    }
    else if (action == 2 && this.innerHTML === ''){
        const player2 = Player(`${name2}`, 'O');
        game.push(player2)

        action = 1;
    }
    for (i=0; i < game.length; i++){

        this.innerHTML = game[i].symbol // each cell is associated and filled with the right value
    }

    var div1 = document.querySelector('.c1')
    var div2 = document.querySelector('.c2')
    var div3 = document.querySelector('.c3')
    var div4 = document.querySelector('.c4')
    var div5 = document.querySelector('.c5')
    var div6 = document.querySelector('.c6')
    var div7 = document.querySelector('.c7')
    var div8 = document.querySelector('.c8')
    var div9 = document.querySelector('.c9')

    var result = document.getElementById('result') // here we display the result

    // all the code bellow is the game rules
  
    if (div1.innerHTML == 'X' && div2.innerHTML == 'X' && div3.innerHTML == 'X')
    { setTimeout(function(){ 
        
        result.innerHTML = `${name1} won`; 
        div1.style.color = "red" 
        div2.style.color = "red"

        div3.style.color = "red" // the line that won will have a red font
        div1.style.borderColor = "white"
        div2.style.borderColor = "white"

        div3.style.borderColor = "white"  // but will keep white borders


    
    
    }, 250); 
    
    } // settimeout for allowing the display to wait 250ms before showing the winner, letting the time to the innerHTML to be filled
    else if (div4.innerHTML == 'X' && div5.innerHTML == 'X' && div6.innerHTML == 'X')
    { setTimeout(function(){ result.innerHTML = `${name1} won`;

    div4.style.color = "red"
    div5.style.color = "red"

    div6.style.color = "red"
    div4.style.borderColor = "white"
    div5.style.borderColor = "white"

    div6.style.borderColor = "white"



}, 250); }
    else if (div7.innerHTML == 'X' && div8.innerHTML == 'X' && div9.innerHTML == 'X')
    { setTimeout(function(){ result.innerHTML = `${name1} won`;
    div7.style.color = "red"
    div8.style.color = "red"

    div9.style.color = "red"
    div7.style.borderColor = "white"
    div8.style.borderColor = "white"

    div9.style.borderColor = "white"



}, 250); }
    else if (div1.innerHTML == 'X' && div4.innerHTML == 'X' && div7.innerHTML == 'X')
    { setTimeout(function(){ result.innerHTML = `${name1} won`;

    div1.style.color = "red"
    div4.style.color = "red"

    div7.style.color = "red"
    div1.style.borderColor = "white"
    div4.style.borderColor = "white"

    div7.style.borderColor = "white"

}, 250); }
    else if (div2.innerHTML == 'X' && div5.innerHTML == 'X' && div8.innerHTML == 'X')
    { setTimeout(function(){ result.innerHTML = `${name1} won`; 

    div2.style.color = "red"
    div5.style.color = "red"

    div8.style.color = "red"
    div2.style.borderColor = "white"
    div5.style.borderColor = "white"

    div8.style.borderColor = "white"

}, 250); }
    else if (div3.innerHTML == 'X' && div6.innerHTML == 'X' && div9.innerHTML == 'X')
    { setTimeout(function(){ result.innerHTML = `${name1} won`; 

    div3.style.color = "red"
    div6.style.color = "red"

    div9.style.color = "red"
    div3.style.borderColor = "white"
    div6.style.borderColor = "white"

    div9.style.borderColor = "white"

}, 250); }
    else if (div1.innerHTML == 'X' && div5.innerHTML == 'X' && div9.innerHTML == 'X')
    { setTimeout(function(){ result.innerHTML = `${name1} won`; 
    div1.style.color = "red"
    div5.style.color = "red"

    div9.style.color = "red"
    div1.style.borderColor = "white"
    div5.style.borderColor = "white"

    div9.style.borderColor = "white"


}, 250); }
    else if (div3.innerHTML == 'X' && div5.innerHTML == 'X' && div7.innerHTML == 'X')
    { setTimeout(function(){ result.innerHTML = `${name1} won`;

    div3.style.color = "red"
    div5.style.color = "red"

    div7.style.color = "red"
    div3.style.borderColor = "white"
    div5.style.borderColor = "white"

    div7.style.borderColor = "white"

}, 250); }
    else if (div1.innerHTML == 'O' && div2.innerHTML == 'O' && div3.innerHTML == 'O')
    { setTimeout(function(){ result.innerHTML = `${name2} won`;

    div1.style.color = "red"
    div2.style.color = "red"

    div3.style.color = "red"
    div1.style.borderColor = "white"
    div2.style.borderColor = "white"

    div3.style.borderColor = "white"

}, 250); }
    else if (div4.innerHTML == 'O' && div5.innerHTML == 'O' && div6.innerHTML == 'O')
    { setTimeout(function(){ result.innerHTML = `${name2} won`; 
    div4.style.color = "red"
    div5.style.color = "red"

    div6.style.color = "red"
    div4.style.borderColor = "white"
    div5.style.borderColor = "white"

    div6.style.borderColor = "white"}, 250); }
    else if (div7.innerHTML == 'O' && div8.innerHTML == 'O' && div9.innerHTML == 'O')
    { setTimeout(function(){ result.innerHTML = `${name2} won`;

    div7.style.color = "red"
    div8.style.color = "red"

    div9.style.color = "red"
    div7.style.borderColor = "white"
    div8.style.borderColor = "white"

    div9.style.borderColor = "white"}, 250); }
    else if (div1.innerHTML == 'O' && div4.innerHTML == 'O' && div7.innerHTML == 'O')
    { setTimeout(function(){ result.innerHTML = `${name2} won`;

    div1.style.color = "red"
    div4.style.color = "red"

    div7.style.color = "red"
    div1.style.borderColor = "white"
    div4.style.borderColor = "white"

    div7.style.borderColor = "white"}, 250); }
    else if (div2.innerHTML == 'O' && div5.innerHTML == 'O' && div8.innerHTML == 'O')
    { setTimeout(function(){ result.innerHTML = `${name2} won`; 

    div2.style.color = "red"
    div5.style.color = "red"

    div8.style.color = "red"
    div2.style.borderColor = "white"
    div5.style.borderColor = "white"

    div8.style.borderColor = "white"}, 250); }
    else if (div3.innerHTML == 'O' && div6.innerHTML == 'O' && div9.innerHTML == 'O')
    { setTimeout(function(){ result.innerHTML = `${name2} won`;

    div3.style.color = "red"
    div6.style.color = "red"

    div9.style.color = "red"
    div3.style.borderColor = "white"
    div6.style.borderColor = "white"

    div9.style.borderColor = "white"}, 250); }
    else if (div1.innerHTML == 'O' && div5.innerHTML == 'O' && div9.innerHTML == 'O')
    { setTimeout(function(){ result.innerHTML = `${name2} won`;
    div1.style.color = "red"
    div5.style.color = "red"

    div9.style.color = "red"
    div1.style.borderColor = "white"
    div5.style.borderColor = "white"

    div9.style.borderColor = "white" }, 250); }
    else if (div3.innerHTML == 'O' && div5.innerHTML == 'O' && div7.innerHTML == 'O')
    { setTimeout(function(){ result.innerHTML = `${name2} won`; 

    div3.style.color = "red"
    div5.style.color = "red"

    div7.style.color = "red"
    div3.style.borderColor = "white"
    div5.style.borderColor = "white"

    div7.style.borderColor = "white"}, 250); }
    else if ((div1.innerHTML == 'O' ||div1.innerHTML == 'X') && 
    (div2.innerHTML == 'O' || div2.innerHTML == 'X') &&
    (div3.innerHTML == 'O' || div3.innerHTML == 'X') &&
    (div4.innerHTML == 'O' || div4.innerHTML == 'X') &&
    (div5.innerHTML == 'O' || div5.innerHTML == 'X') &&
    (div6.innerHTML == 'O' || div6.innerHTML == 'X') &&
    (div7.innerHTML == 'O' || div7.innerHTML == 'X') &&
    (div8.innerHTML == 'O' || div8.innerHTML == 'X') &&
    (div9.innerHTML == 'O' || div9.innerHTML == 'X'))
    { setTimeout(function(){ result.innerHTML = "Tie"; }, 250); }

    
  
  

  }

function Restart(){

    action = 1;
    game = []
  

    document.querySelector('.c1').innerHTML = ''
    document.querySelector('.c2').innerHTML = ''
    document.querySelector('.c3').innerHTML = ''
    document.querySelector('.c4').innerHTML = ''
    document.querySelector('.c5').innerHTML = ''
    document.querySelector('.c6').innerHTML = ''
    document.querySelector('.c7').innerHTML = ''
    document.querySelector('.c8').innerHTML = ''
    document.querySelector('.c9').innerHTML = ''
    document.getElementById('result').innerHTML = '' // clearing the board

    var div1 = document.querySelector('.c1')
    var div2 = document.querySelector('.c2')
    var div3 = document.querySelector('.c3')
    var div4 = document.querySelector('.c4')
    var div5 = document.querySelector('.c5')
    var div6 = document.querySelector('.c6')
    var div7 = document.querySelector('.c7')
    var div8 = document.querySelector('.c8')
    var div9 = document.querySelector('.c9')

    div1.style.color = "white" // restoring the font color to white when reset
    div2.style.color = "white"
    div3.style.color = "white"
    div4.style.color = "white"
    div5.style.color = "white"
    div6.style.color = "white"
    div7.style.color = "white"
    div8.style.color = "white"
    div9.style.color = "white"


}
