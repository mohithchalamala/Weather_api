const apikey = "54195f40830c93004ca1931b34dfdffb";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector('.search input');
const searchbttn = document.querySelector('.search button');

searchbttn.addEventListener('click', ()=>{
    checkweather(searchbox.value);
});

async function checkweather(city)
{
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".hum").innerHTML = data.main.humidity + " %";
    document.querySelector(".win").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds")
    {
        document.querySelector(".icon").src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear")
    {
        document.querySelector(".icon").src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain")
    {
        document.querySelector(".icon").src = "images/rain.png";
    }
    else if(data.weather[0].main == 'Drizzle')
    {
        document.querySelector(".icon").src = "images/drizzle.png";
    }
    else if(data.weather[0].main == 'Mist')
    {
        document.querySelector(".icon").src = "images/mist.png";
    }
}
checkweather();