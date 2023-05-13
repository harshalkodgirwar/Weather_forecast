
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=282f1b099675ad387390ed13c7ecc9ce&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function weather_data(city){
    const res = await fetch(apiurl + city)

    if(res.status == 404)
    {
       document.querySelector(".error").style.display = "block" ;
       document.querySelector(".weather").style.display = "none" ;
    }
    else{

    
    
    var data = await res.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Kmph";


    if(data.weather[0].main == "Clouds")
    {
        weathericon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear")
    {
        weathericon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain")
    {
        weathericon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle")
    {
        weathericon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist")
    {
        weathericon.src = "images/mist.png";
    }
    //for blocking the display property when we enter city name
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none"; 
}

}

searchBtn.addEventListener("click", ()=>
{
weather_data(searchBox.value);
})
searchBox.addEventListener("keypress", (e) =>{
    if(e.keyCode === 13)
    {
        console.log("Hello")
         weather_data(searchBox.value)
    }
})
