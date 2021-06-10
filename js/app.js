'use-strict';
const menuIcon = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu');
const menuStick =document.querySelector('.hamburguer-icon');
const darkmode = document.querySelector('#darkmode');
const darkmodeIcon = document.querySelector('#darkmode-icon');
const root = document.documentElement;


function showMenu(){
    
    menu.classList.toggle('menu-active');
    menuStick.classList.toggle('animate');
   
}

function activeDarkMode(){

    const sound = new Audio("../sound/sound-darkmode.mp3");
    darkmodeIcon.classList.toggle('darkmode-active');
    sound.play();
    
  
    if(this.checked){
    root.style.setProperty('--primary','#0057ff');
    root.style.setProperty('--secondary','#fff');
    root.style.setProperty('--background','#1b2831');
    root.style.setProperty('--button-secondary','#05b2f1');
    root.style.setProperty('--color-socials','#05b2f1');

   }else{
   
    root.style.setProperty('--primary','#0000ff');
    root.style.setProperty('--secondary','#172326');
    root.style.setProperty('--background','#fff');
    root.style.setProperty('--button-secondary','#0000ff');
    root.style.setProperty('--color-socials','#0000ff');
   }
    
}

menuIcon.addEventListener('click',showMenu);
darkmode.addEventListener('click',activeDarkMode)