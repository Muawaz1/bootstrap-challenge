
let hamburger = document.querySelector(".navbar-toggler");
let headerOverlay = document.querySelector(".overlay"); 

hamburger.addEventListener('click', () => {
	headerOverlay.classList.toggle("header-overlay");
	
})