document.addEventListener('DOMContentLoaded', function() { // making sure the doam is loaded first, after that we can locate elements by ID easily




const change = document.getElementById('switch') // night mode switcher 






change.addEventListener('change', swap)


var image =  document.getElementById("image"); 

image.addEventListener('click', changeColor)

function changeColor() /* the picture switches to black and white on click */
    {
        if (image.getAttribute('src') == "./gifs/boris.jpeg")
        {
            image.src = "./gifs/boris2.jpg";
        }
        else
        {
            image.src = "./gifs/boris.jpeg";
        }
    }

myID = document.getElementById("image3");


window.onscroll = function() {
if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight -2) {
myID.className = "cta show"
} else {
myID.className = "cta hide"
} } // when scrolled down at the bottom of the page, a drawing picture is popping


})

function swap(){

 

    if (document.querySelector('.wrapper').classList == 'wrapper light') { // if it's lightmode then
   
   document.querySelector('.wrapper').classList.remove('light'); // remove class light
   document.querySelector('.wrapper').classList.add('dark'); // add class dark
   document.querySelector('.navbar').classList.remove('navbar-light');  // remove navbar light from bootstrap css navbar
   document.querySelector('.navbar').classList.add('navbar-dark') // add navbar dark
   document.querySelector('.bottom').classList.add('bottom3') // changes the class of the quote to bottom3, in order to have white text, white borders etc.

   document.querySelector('.bottom').classList.remove('bottom');

   
   } else {
       document.querySelector('.wrapper').classList.remove('dark'); // if nightmode, then do the opposite
       document.querySelector('.wrapper').classList.add('light');
       document.querySelector('.navbar').classList.remove('navbar-dark');
       document.querySelector('.navbar').classList.add('navbar-light')
       document.querySelector('.bottom3').classList.add('bottom')

       document.querySelector('.bottom3').classList.remove('bottom3');


   }
   
}