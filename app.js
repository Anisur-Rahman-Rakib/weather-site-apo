let srcButton = document.getElementById("search-button");

let inputValue = document.getElementById("input-value");



let cityName = document.getElementById("city-name");

let temperatureValue = document.getElementById("temperature");

let descriptionText = document.getElementById("description");


srcButton.addEventListener("click" , function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&APPID=37371c4f418dee06ea0a0e9daeeebd12")
    .then( response => response.json())
    // .then( data  => console.log(data))
    .then(data => {
   
        let nameValue = data['name'];
        let tempValue = data['main']['temp'];
        let descValue = data['weather'][0]['description'];
            
      
       cityName.innerText = nameValue;
       temperatureValue.innerText = tempValue;
       descriptionText.innerText = descValue;
    })

})


// try any way.........




// let cloudIcon = data['icon];
    //     let nameValue = data['name'];
    //     let tempValue = data['main']['temp'];
    //     let descValue = data['weather']['description'];
            
    // cloudImg.value =cloudIcon;
    //    cityName.innerText = nameValue;
    //  temperatureValue.innerText = tempValue;
    //    descriptionTex.innerText = descValue;
        
    // })

// fetch("api.openweathermap.org/data/2.5/weather?q={cityName}&appid={37371c4f418dee06ea0a0e9daeeebd12}")
// .then( response => response.json())
// .than(data => )


// srcButton.addEventListener("click" , function(){
//     fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=37371c4f418dee06ea0a0e9daeeebd12")
//     .then( response => response.json())
//     .then( data  => console.log(data))
//     .catch(err => alert("wrong city name"))

// })
 // .then( data  => console.log(data))
    // .catch(err => alert("wrong city name"))