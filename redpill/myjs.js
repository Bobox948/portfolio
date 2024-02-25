document.addEventListener('DOMContentLoaded', function() { // making sure the doam is loaded first, after that we can locate elements by ID easily




const change = document.getElementById('switch') // night mode switcher 








var myopacity = 1;

function MyFadeFunction() {
   if (myopacity>0) {
      myopacity -= .015;
     setTimeout(function(){MyFadeFunction()},100);
   }
   document.getElementById('matrix').style.opacity = myopacity;
}


 setTimeout(function(){
    MyFadeFunction()
 },3000)



function MyFadeFunction2() {
   if (myopacity>0) {
      myopacity -= .033;
     setTimeout(function(){MyFadeFunction2()},75);
   }
   document.getElementById('glasses').style.opacity = myopacity;

}


 setTimeout(function(){
    MyFadeFunction2()
 },3000)


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