let srcButton = document.getElementById("search-button");

let inputValue = document.getElementById("input-value");

let cityName = document.getElementById("city-name");

let temperatureValue = document.getElementById("temperature");

let descriptionText = document.getElementById("description");


srcButton.addEventListener("click" , function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q={cityName.value}&appid={db8228f3d79f00371f8b536941d70ec8}")
    .then( response => response.json())
    .then( data  => console.log(data))
    .catch(err => alert("wrong city name"))

})

// fetch ("api.openweathermap.org/data/2.5/weather?q={cityName}&appid={37371c4f418dee06ea0a0e9daeeebd12}")
// .then( response => response.json())
// .than(data => )