function myFunction() {
    var searchCity = document.getElementById('searchCity').value;

    fetch(
        'https://api.openweathermap.org/data/2.5/forecast?q=' +
        
        searchCity +
        
        '&appid=882d795707b6c6ef3aba333014e9f925&units=imperial'

    )
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        //Shows the city you searched
            var cityEl = document.querySelector('#city');
            cityEl.innerHTML = (searchCity);
            //making sure that the API was called to correctly
            console.log(response.list[0]);
            //shows the current temperature
            var temperatureEl = document.querySelector('#temperature');
            temperatureEl.innerHTML = ('Current Temperature: ' + response.list[0].main.temp + ' &degF');
            //shows the high for the day
            var highEl = document.querySelector('#high');
            highEl.innerHTML = ('High: ' + response.list[0].main.temp_max + ' &degF');
            //shows the low for the day
            var lowEl = document.querySelector('#low');
            lowEl.innerHTML = ('Low: ' + response.list[0].main.temp_min + ' &degF');
            //shows the humidity
            var humidityEl = document.querySelector('#humidity');
            humidityEl.innerHTML = ('Humidity: ' + response.list[0].main.humidity +'%');
            //shows the wind
            var humidityEl = document.querySelector('#wind');
            humidityEl.innerHTML = ('Wind Speed: ' + response.list[0].wind.speed +'mph');

       
        
    })
    .then(function() {
        localStorage.setItem("cities", cityEl)
        document.createElement('li')
        
    })
}