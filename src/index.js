
let hamburger = document.querySelector(".navbar-toggler");
let collapse = document.querySelector(".collapsed");
let headerOverlay = document.querySelector(".overlay"); 

hamburger.addEventListener('click', () => {
	headerOverlay.classList.toggle("header-overlay");
	
})