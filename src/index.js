
let hamburger = document.querySelector(".navbar-toggler");
let collapse = document.querySelector(".collapsed");
let headerOverlay = document.querySelector(".overlay");
console.log('helooo', hamburger )
// function toggleHamburger() {
// 	hamburger.classList.toggle("header-overlay");
// 	console.log('helooo', hamburger )
// }

hamburger.addEventListener('click', () => {
	console.log("heloo")

		headerOverlay.classList.toggle("header-overlay");
	
})