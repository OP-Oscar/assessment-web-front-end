console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();

	alert("Form submtited successfully");
}


let form = document.querySelector('#contact');
let mainImg = document.querySelector('#main-duck-img')

function handleHovering(evt){
	evt.preventDefault();
	alert("Aren't you looking cool?!")
}
form.addEventListener('submit', handleSubmit);
mainImg.addEventListener('mouseover', handleHovering);


