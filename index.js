const apiKey = "3d695f462dcae4c1abb8e1814a1790a0";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox = document.querySelector(".main input");
        const searchBtn = document.querySelector(".main button");
        const weatherIcon = document.querySelector(".weather-icon");
        const image = document.querySelector(".container");
        
        async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data = await response.json();
        console.log(data);
        

        document.querySelector(".city-el").innerHTML = data.name;
        document.querySelector(".humidity-el").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind-el").innerHTML = data.wind.speed + "Km/h";
        document.querySelector(".degree").innerHTML = Math.round(data.main.temp) + "°C";
        if (data.weather[0].main == "Clouds"){
                weatherIcon.src = "clouds.png"
                image.style.backgroundImage = "url('clouds.jpg')";
                
        }
        else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "rain.png"
                image.style.backgroundImage = "url('RAINY.jpg')";
        }
        else if (data.weather[0].main == "Clear"){
                weatherIcon.src = "clear.png"
                image.style.backgroundImage = "url('cleary.jpg')";
        }
        else if (data.weather[0].main == "Drizzle"){
                weatherIcon.src = "drizzle.png"
                image.style.backgroundImage = "url('drizzle.jpg')";  
        } 
        else if (data.weather[0].main == "Snow"){
                weatherIcon.src = "snow.png"
                image.style.backgroundImage = "url('snowy.jpg')";  
        } 
        else if (data.weather[0].main == "Wind"){
                weatherIcon.src = "wind.png"
                image.style.backgroundImage = "url('snowy.jpg')";  
        } 
        else if (data.weather[0].main == "Haze"){
                weatherIcon.src = "haze.png"
                image.style.backgroundImage = "url('hazey.jpg')";  
        } 
        else {
                weatherIcon.src == "mist.png"
                image.style.backgroundImage = "url('mist.jpg')";        
        
        }
}
        searchBtn.addEventListener("click", ()=>{
                checkWeather(searchBox.value);
        })
