let srcButton = document.getElementById("search-button");

let inputValue = document.getElementById("input-value");

let cityName = document.getElementById("city-name");

let temperatureValue = document.getElementById("temperature");

let descriptionText = document.getElementById("description");


srcButton.addEventListener("click" , function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&APPID=37371c4f418dee06ea0a0e9daeeebd12")
    .then( response => response.json())
    .then( data  => console.log(data))
    .catch(err => alert("wrong city name"))

})

// fetch("api.openweathermap.org/data/2.5/weather?q={cityName}&appid={37371c4f418dee06ea0a0e9daeeebd12}")
// .then( response => response.json())
// .than(data => )


// srcButton.addEventListener("click" , function(){
//     fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=37371c4f418dee06ea0a0e9daeeebd12")
//     .then( response => response.json())
//     .then( data  => console.log(data))
//     .catch(err => alert("wrong city name"))

// })
