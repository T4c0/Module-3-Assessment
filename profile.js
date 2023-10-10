// Get references
const favoriteColor = document.getElementById("favoriteColor");
const favoritePlace = document.getElementById("favoritePlace");
const favoriteRitual = document.getElementById("favoriteRitual");

//Functions
function submitFavoriteColor() {
  alert("My favorite color is green");
}
function submitFavoritePlace() {
  alert("My favorite place is home");
}
function submitFavoriteRitual() {
  alert("My favorite ritual is watching the solar eclipse!");
}

//Add event listeners
favoriteColor.addEventListener("click", submitFavoriteColor);
favoritePlace.addEventListener("click", submitFavoritePlace);
favoriteRitual.addEventListener("click", submitFavoriteRitual);
