// console.log('Neighborhood JS successfully linked')

const ranBtn = document.querySelector("#ranBtn")

const resta = ["Killen's Barbecue", "Boil House", "My Bistro Noodle & Grill", "Downtown Aquarium Restaurant"];


function ranRest(evt){
	evt.preventDefault();
    const random = Math.floor(Math.random() * resta.length);
    alert(`You should go to ${resta[random]}`)
}


ranBtn.addEventListener("click",ranRest)