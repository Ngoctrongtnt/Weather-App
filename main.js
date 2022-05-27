var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var value = document.querySelector('.value');
var shortDesc = document.querySelector('.short-desc');
var visibility = document.querySelector('.visibility');
var wind = document.querySelector('.wind');
var sun = document.querySelector('.sun');
var time = document.querySelector('.content__time');
var content = document.querySelector('.content');
var body = document.querySelector('body');

async function changeWeatherUI(capitalSearch) {
   
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch},&appid=e9903a8344fee2bdaac0908e3d5afa11`
    let data = await fetch(apiURL).then(res => res.json());
    console.log(data);
    if (data.cod == 200) {
        content.classList.remove('hide');
        city.innerText = data.name;
        country.innerText = data.sys.country;
        visibility.innerText = data.visibility + 'm';
        wind.innerText = data.wind.speed + 'm/s';
        sun.innerText = data.main.humidity + '%';
        let temp = Math.round(data.main.temp - 273);
        value.innerText = temp  + '°' + 'C';
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : '';
        time.innerText = new Date().toLocaleString('vi');
        
        
        body.setAttribute('class', 'hot')

        if (temp <= 26) {
            body.setAttribute('class', 'warm')
        }
        if (temp <= 18) { 
            body.setAttribute('class', 'cool') 
        }
        if (temp > 18 && temp < 23) { 
            body.setAttribute('class', 'cold') 
        }
    }
    else {
        content.classList.add('hide')
    }
}

search.addEventListener('keypress', function (e) {
    if (e.code === 'Enter') {
        let capitalSearch = search.value.trim()
        changeWeatherUI(capitalSearch)
    }
})
changeWeatherUI('Ha Noi');

// $("#btn").click(function(){
//     changeWeatherUI();
//   });

// function myFunction() {
//     changeWeatherUI('Ha Noi');
    
//   }