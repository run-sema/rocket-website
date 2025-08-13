let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick =  () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll =  () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

lottie.loadAnimation({
  container: document.getElementById('rocket-container'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'js/rocket.json'
});