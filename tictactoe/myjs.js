
document.addEventListener('DOMContentLoaded', function() { // making sure the doam is loaded first, after that we can locate elements by ID easily
  
    for (i=1; i<10; i++){

        document.querySelector(`.c${[i]}`).addEventListener('click', Game)

   
    }
    document.querySelector('#restart').addEventListener('click', Restart)

    const hideButton = document.getElementById('play');
    const container = document.querySelector('.mid');
    const restartButton = document.getElementById('restart');

    
    hideButton.addEventListener('click', () => {
     
        container.style.display = 'flex';
        hideButton.style.display= 'none'
        restartButton.style.display= 'flex'

      
  
  })
  

  })



  const Player = (name, symbol) => {    
    return { name, symbol }


}

  var action = 1;
  var game = []

  function Game() {
    if (document.getElementById('name1').value == '' && document.getElementById('name2').value == '')
    { var name1 = 'Player 1'
    var name2 = 'Player 2'}
    else if (document.getElementById('name1').value == '')
    {
        var name1 = 'Player 1'
        var name2 = document.getElementById('name2').value
    }

    else if (document.getElementById('name2').value == '')

    {
        var name2 = 'Player 2'
        var name1 = document.getElementById('name1').value
    }
    else {
    var name1 = document.getElementById('name1').value
    var name2 = document.getElementById('name2').value } 
    
    if ( action == 1 && this.innerHTML === '' ) {
        const player = Player(`${name1}`, 'X');
        game.push(player)
        action = 2;
    }
    else if (action == 2 && this.innerHTML === ''){
        const player2 = Player(`${name2}`, 'O');
        game.push(player2)

        action = 1;
    }
    for (i=0; i < game.length; i++){

        this.innerHTML = game[i].symbol
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

    var result = document.getElementById('result')
  
    if (div1.innerHTML == 'X' && div2.innerHTML == 'X' && div3.innerHTML == 'X')
    { setTimeout(function(){ result.innerHTML = `${name1} won`; }, 250); }
    else if (div4.innerHTML == 'X' && div5.innerHTML == 'X' && div6.innerHTML == 'X')
    { setTimeout(function(){ result.innerHTML = `${name1} won`; }, 250); }
    else if (div7.innerHTML == 'X' && div8.innerHTML == 'X' && div9.innerHTML == 'X')
    { setTimeout(function(){ result.innerHTML = `${name1} won`; }, 250); }
    else if (div1.innerHTML == 'X' && div4.innerHTML == 'X' && div7.innerHTML == 'X')
    { setTimeout(function(){ result.innerHTML = `${name1} won`; }, 250); }
    else if (div2.innerHTML == 'X' && div5.innerHTML == 'X' && div8.innerHTML == 'X')
    { setTimeout(function(){ result.innerHTML = `${name1} won`; }, 250); }
    else if (div3.innerHTML == 'X' && div6.innerHTML == 'X' && div9.innerHTML == 'X')
    { setTimeout(function(){ result.innerHTML = `${name1} won`; }, 250); }
    else if (div1.innerHTML == 'X' && div5.innerHTML == 'X' && div9.innerHTML == 'X')
    { setTimeout(function(){ result.innerHTML = `${name1} won`; }, 250); }
    else if (div3.innerHTML == 'X' && div5.innerHTML == 'X' && div7.innerHTML == 'X')
    { setTimeout(function(){ result.innerHTML = `${name1} won`; }, 250); }
    else if (div1.innerHTML == 'O' && div2.innerHTML == 'O' && div3.innerHTML == 'O')
    { setTimeout(function(){ result.innerHTML = `${name2} won`; }, 250); }
    else if (div4.innerHTML == 'O' && div5.innerHTML == 'O' && div6.innerHTML == 'O')
    { setTimeout(function(){ result.innerHTML = `${name2} won`; }, 250); }
    else if (div7.innerHTML == 'O' && div8.innerHTML == 'O' && div9.innerHTML == 'O')
    { setTimeout(function(){ result.innerHTML = `${name2} won`; }, 250); }
    else if (div1.innerHTML == 'O' && div4.innerHTML == 'O' && div7.innerHTML == 'O')
    { setTimeout(function(){ result.innerHTML = `${name2} won`; }, 250); }
    else if (div2.innerHTML == 'O' && div5.innerHTML == 'O' && div8.innerHTML == 'O')
    { setTimeout(function(){ result.innerHTML = `${name2} won`; }, 250); }
    else if (div3.innerHTML == 'O' && div6.innerHTML == 'O' && div9.innerHTML == 'O')
    { setTimeout(function(){ result.innerHTML = `${name2} won`; }, 250); }
    else if (div1.innerHTML == 'O' && div5.innerHTML == 'O' && div9.innerHTML == 'O')
    { setTimeout(function(){ result.innerHTML = `${name2} won`; }, 250); }
    else if (div3.innerHTML == 'O' && div5.innerHTML == 'O' && div7.innerHTML == 'O')
    { setTimeout(function(){ result.innerHTML = `${name2} won`; }, 250); }
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
    document.getElementById('result').innerHTML = ''

}
