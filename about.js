// console.log("hello world");
// Get references to the duck images
const duckImage = document.getElementById("duck");
let form = document.querySelector("#contact");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("form submit");
}





// Function to display a compliment
function giveCompliment() {
	alert("You're amazing! 🌟");
}

// Add event listeners for mouseover, submit
duckImage.addEventListener("mouseover", giveCompliment);
form.addEventListener("submit", handleSubmit);
