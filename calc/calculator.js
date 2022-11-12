
// variables declaration

var value = []
var value1 = []
var total = 0;




// I select all the buttons of button type
    var button = document.querySelectorAll('button')
    // I make an array of button because else it's an HTML collection and some operations won't be possible, but with an array it will be
    var button2= Array.from(button)

    // I loop through all the buttons of button type


    for (let i=0;i < button2.length;i++){
    
        // on click, do
        button2[i].addEventListener('click', function(e){

            
       
 // if the click is equal to these numbers, push to the array "value"
            if (e.target.value == "0"|| e.target.value == "1"|| e.target.value == "2"|| e.target.value == "3"|| 
            e.target.value == "4"|| 
            e.target.value == "5"|| e.target.value == "6"|| e.target.value == "7"|| 
            e.target.value == "8"|| 
            e.target.value == "9")
            {
                value.push(e.target.value)

   
            }
            else
            // else, assign the value array to the value1 array, because when we click first on numbers, example 33, then we click on +, so the else activates, and then we click back on some numbers like 14 (to have 33 + 14) and the value array will now contain +14, the value1 array will contain 33
            {
                value1 = value
                value = []
                value.push(e.target.value)

    
            }

            // we split the array in two arrays, with the first value of the array value, which is the operator, because of the "if else" statement above
            var indexToSplit = value.indexOf(value[0])
            var symbol=value[indexToSplit] // this is the operator

                var second = value.slice(indexToSplit + 1); // the second array is now only numbers, without the operator

    
                var filtered2 = second.filter(function (item) {
                    return(parseInt(item) == item);
                  }); // we transform all the data of the array value into integers
    
                var joined2 = filtered2.join('') // we join them, no more commas

               
                var joined3 = value1.join('') // we also join the numbers of value one, and we don't need or want to take only the integers in this one because we can have -33 for instance, to allow negative values operations

            // we here create the display
            var screen = document.getElementById('screen');
            var div1 = document.createElement('div');
            screen.appendChild(div1);

            // displaying only the data without commas, and value is firstly the first number then it becomes the second so this is ok
            screen.textContent = value.join('');
            
// clear function to reset all data
            const clear = document.getElementById('clear');
            clear.addEventListener('click', function(){
                    
            
                   
                value = []
                value1 = []
                var div6 = document.createElement('div');
                screen.appendChild(div6);
                // 0 is now displayedon the screen
                screen.textContent="0"
                
             
                
                
            })

    

   
// the calculation function when "=" is clicked, takes 3 parameters, a number a, a number b, and the operator (+, -, * or /)

var result = document.getElementById('result');

result.addEventListener('click', function(a, operator, b){
                
// here I define the values of these variables (the arguments)

var a = joined3
var operator = symbol
var b = joined2
    
        if (operator == '+')
        {
                    total = add(a,b) 
                    // creates a div for the display
                    var div2 = document.createElement('div');
                    screen.appendChild(div2);
                    screen.textContent=total
            }

            
                 
    else if (operator == "-")
    {var total = subtract(a,b)
        var div3 = document.createElement('div');
        screen.appendChild(div3);
        screen.textContent=total

    }
    else if (operator =="*"){
        
        total =  multiply(a,b)
        var div4 = document.createElement('div');
        screen.appendChild(div4);
        screen.textContent=total

    }
    else if (operator =="/"){
        
        total = divide(a,b)

        var div5 = document.createElement('div');
        screen.appendChild(div5);
        screen.textContent=total.toFixed(1) // here I round to one decimal after the comma


    }    

    })
    


    })


    }

  // the functions bellow are the simple operations that a calculator can do


    function add (a,b) {

return Number(a)+Number(b); // here I have to force to number because if not, it will concatenate 

}

    

function subtract (a,b){

    return a-b;

}
function multiply (a,b){

return a*b;
}
function divide(a,b){
return a/b;
}






