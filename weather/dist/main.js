(()=>{"use strict";async function e(e){e.preventDefault();const t=document.querySelector(".content");var a=document.querySelector("#search").value;const n=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=e5040345367f59d1754a978762675629&units=metric`,{mode:"cors"}),o=await n.json();var c,r,s=(c=a).charAt(0).toUpperCase()+c.slice(1);t.innerHTML=`Temperature in ${s} : ${o.main.temp}°C`,o.main.temp<15?(document.body.style.backgroundColor="lightgrey",(r=document.querySelector(".sun")).classList.remove("sun"),r.classList.add("bad")):(document.body.style.backgroundColor="#00b4ff",(r=document.querySelector(".bad")).classList.add("sun"),r.classList.remove("bad"))}document.addEventListener("DOMContentLoaded",(function(){document.querySelector("#submit").addEventListener("click",e)}))})();