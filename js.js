let nav=document.querySelector('nav'),
listBut=document.querySelector('#listBut');
listBut.addEventListener('click',()=>{
  nav.classList.toggle('show-hide')
})

// ====================
aboutUs=document.querySelector('#about-us'),
aboutUsBut=document.querySelector('#about-us-but'),
homeBut=document.querySelector('#home-but');
aboutUsBut.addEventListener('click',()=>{
  aboutUs.scrollIntoView();
})
homeBut.addEventListener('click',()=>{

  window.scrollTo({
    top:0,
  })
})

// ====================
let header=document.querySelector('header');
window.addEventListener('scroll',()=>{
  if(window.scrollY>=350){
    header.style.cssText=('background-color:white; padding: 1em 0; width: 100%; justify-content: space-around; top:0;')
    
  }else{
    header.style.cssText=('background-color:none')
  }
})

let cancelBut=document.querySelector('#cancelBut'),
joinUS=document.querySelector('.join-us'),
joinBut=document.querySelector('#joinBut');

cancelBut.addEventListener('click',()=>{
joinUS.style.display='none';
})
joinBut.addEventListener('click',()=>{
joinUS.style.display='flex';
})

// ==================

let slpBut=document.querySelectorAll('.slp-but');
slpBut.forEach((e)=>{
  e.addEventListener('click',()=>{
    confirm('Sorry There Is No More');
  })
})

// =============
let number1=document.querySelector('#number1'),
number2=document.querySelector('#number2'),
number3=document.querySelector('#number3');

number1.addEventListener('click',()=>{
  number1.innerText='120'
})
