'use strict';

const button = document.querySelector('#btn');

button.addEventListener('click',function()
{
   document.body.classList.toggle("light-theme");
   document.body.classList.toggle("dark-theme");

   const className = document.body.className;
   if(className == "light-theme")
   {
      this.textContent = "☾";
   }
   else
   {
      this.textContent = "☀"; 
   }
});

let topButton = document.getElementById("arrowUp");
let hb = document.getElementById("homeButton");

function topFunction()
{
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; //For Chrome, Firefox, IE and Opera
}

function openLinkedIn()
{
   window.open('https://www.linkedin.com/in/eleni-k-a1a1911b7/');
}

function openGitHub()
{
   window.open('https://github.com/Lena341');
}

function openCodepen()
{
   window.open('https://codepen.io/elenak23');
}




