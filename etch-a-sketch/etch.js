
const container = document.getElementById('container1');

var userinput=16; // default grid size, 16*16
var colors = ["blue", "green", "red", "black", "purple", "yellow", "orange", "brown", "pink", "gray", ]
// the colors array is for random colors


for (let i=0; i<userinput; i++){ // creation of the default grid 16*16

    var div1 = document.createElement('div');
    div1.classList.add('break');
    container.appendChild(div1); // break the line to another one

    
   
    for (let j=0; j<userinput; j++)
    {
        var div1 = document.createElement('div');
        div1.classList.add('content');
        container.appendChild(div1); // inner loop, 16 squares per line 16 times for instance
        
       
        
        
    }

    var divcolor = document.getElementsByClassName("content");

var divcolor2 = Array.from(divcolor) // the divs will change color on mouseover


for (let i=0;i < divcolor2.length;i++){

divcolor2[i].addEventListener('mouseover', function(){



var random = Math.floor((Math.random() * colors.length));
var random2 = colors[random] // random color from the color array on the default grid
    


    divcolor2[i].style.backgroundColor= random2;


    

})

}

    
   
}

let gridselect = document.getElementById('grid')

gridselect.addEventListener('click', selection) // we remove the old grip to generate a new one

function selection(){

let element = document.getElementsByClassName("content");


let element2= Array.from(element)


for (let i=0; i<element2.length; i++){

    element2[i].remove();
}



 let ask = prompt('Size of grid?')
 userinput = Number(ask)
if (userinput >100 || userinput=="" || userinput==null || isNaN(userinput)){ 
    alert("Maximum grid 100x100, and please enter a number only");
    userinput = 16; // back to default 16*16


for (let i=0; i<userinput; i++){ // creation of the 16*16 default grid because the input was wrong

    var div1 = document.createElement('div');
    div1.classList.add('break');
    container.appendChild(div1);

    
   
    for (let j=0; j<userinput; j++)
    {
        var div1 = document.createElement('div');
        div1.classList.add('content');
        container.appendChild(div1);
        
        
        
        
    }
    
   
}
 
var divcolor = document.getElementsByClassName("content");

var divcolor2 = Array.from(divcolor)


for (let i=0;i < divcolor2.length;i++){

divcolor2[i].addEventListener('mouseover', function(){


    var random = Math.floor((Math.random() * colors.length));
    var random2 = colors[random]
        
    
    
        divcolor2[i].style.backgroundColor= random2; // random color on mouseover for this default grid generator because the input was incorrect
})
} }
else{ // creation of the new custom grid according to correct user input (size)
 for (let i=0; i<userinput; i++){

    var div1 = document.createElement('div');
    div1.classList.add('break');
    container.appendChild(div1);

    
   
    for (let j=0; j<userinput; j++)
    {
        var div1 = document.createElement('div');
        div1.classList.add('content');
        container.appendChild(div1);
        
        
        
        
    }
    
   
}
 
var divcolor = document.getElementsByClassName("content");

var divcolor2 = Array.from(divcolor)


for (let i=0;i < divcolor2.length;i++){

divcolor2[i].addEventListener('mouseover', function(){

    var random = Math.floor((Math.random() * colors.length));
    var random2 = colors[random]
        
    
    
        divcolor2[i].style.backgroundColor= random2; // random colors on this new custom grid according to the user input
    
})
}
}
}





