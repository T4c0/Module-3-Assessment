function getRandomRestaurant() {
    const restaurants = ["Chiili's", "Applebees's", "Texas Roadhouse", "Waffle House"]; // Add your local restaurants here
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    const randomRestaurant = restaurants[randomIndex];
    return randomRestaurant;
  }
  
  // Add an event listener to the button
  const randomRestaurantButton = document.getElementById('randomRestaurantButton');
  randomRestaurantButton.addEventListener('click', function () {
    const recommendation = getRandomRestaurant();
    alert(`Random Restaurant Recommendation: ${recommendation}`);
  });