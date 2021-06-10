'use-strict';
const menuIcon = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu');
const menuStick =document.querySelector('.hamburguer-icon');
const listLink = document.querySelectorAll(" .menu__link");
const darkmode = document.querySelector('#darkmode');
const darkmodeIcon = document.querySelector('#darkmode-icon');
let hasDarkMode = localStorage.getItem('darkmode');






if(hasDarkMode ==='enable'){
    document.querySelector('.darkmode__checkbox').setAttribute('checked',true);
    darkmodeIcon.classList.toggle('darkmode-active');
    activateDarkMode();
}



function showMenu(){
    
    menu.classList.toggle('menu-active');
    menuStick.classList.toggle('animate');
   
}

function activateDarkMode(){
   
    document.body.classList.add('darkmodeTheme');
    localStorage.setItem('darkmode','enable');
}

function deactivateDarkMode(){
  
    document.body.classList.remove('darkmodeTheme');
    localStorage.setItem('darkmode','disable');
}

function gotosection(){
    menu.classList.toggle('menu-active');
} 



 function  darkModeToggle(e){
  
    darkmodeIcon.classList.toggle('darkmode-active');
    const sound = new Audio("../sound/sound-darkmode.mp3");
    sound.play();


    if(e.target.checked){
        activateDarkMode();
    }else{
        deactivateDarkMode();
    }
   
    
}
menuIcon.addEventListener('click',showMenu);
darkmode.addEventListener('click',darkModeToggle)
listLink.forEach(function(link){
    link.addEventListener("click",gotosection)
})