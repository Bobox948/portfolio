
const container = document.getElementById('container1');


var grid =75; // default grid size, 75*75

for (let i=0; i<grid; i++){ // creation of the grid 75*75

    var div1 = document.createElement('div');
    div1.classList.add('break');
    container.appendChild(div1); // break the line 

    
   
    for (let j=0; j<grid; j++)
    {
        var div1 = document.createElement('div');
        div1.classList.add('content');
        container.appendChild(div1); // inner loop, 75 squares per line 75 times 
        
       
        
        
    }

}



    var divcolor = document.getElementsByClassName("content");

    var btn = document.querySelector("#restart");
    btn.addEventListener('click', function(){

window.location.reload()    }) // clear the board


var divcolor2 = Array.from(divcolor) 




for (let i=0;i < divcolor2.length;i++){

divcolor2[i].addEventListener('mouseover', changecolor) // the divs will change color mousedown + mouseover 
divcolor2[i].addEventListener('mousedown', changecolor)

divcolor2[i].addEventListener('touchstart', changecolor)




 
    
    }
    


            


function changecolor(event){
        if (event.buttons === 1) { // if both mousedown and mouseover (over the div grid) are respected, then we can draw
        
        
        var picker = document.querySelector('#colorpicker') // we retrieve the value of the html color picker
        var color = picker.value 
        this.style.backgroundColor= color
        if ( document.querySelector('#erase').checked) // if the erase button is checked, then we apply to color of the background of the grid to erase

        {
            this.style.backgroundColor= '#fefee0';


        }
    



    
    
    }

}

document.querySelector('#download').addEventListener('click', function() {
    html2canvas(document.querySelector('#container1')).then(function(canvas) {
        var link = document.createElement("a");
        document.body.appendChild(link);
        link.download = "etch-a-sketch.png";
        link.href = canvas.toDataURL();
        link.target = '_blank';
        link.click();
    });
});