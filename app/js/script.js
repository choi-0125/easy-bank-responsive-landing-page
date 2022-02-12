const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade');


btnHamburger.addEventListener('click', function (){
  console.log('click hamburger');
  
  if(header.classList.contains('open')){ // Close Hamburger Menu
    header.classList.remove('open');
    body.classList.remove('noscroll')
    fadeElems.forEach(elem => {
      elem.classList.remove('fade-in');
      elem.classList.add('fade-out');
      
    })
  } else { // Open Hamburger Menu
    header.classList.add('open');
    body.classList.add('noscroll')
    fadeElems.forEach(elem => {
      elem.classList.add('fade-in');
      elem.classList.remove('fade-out');
      
    })
    

  }
})