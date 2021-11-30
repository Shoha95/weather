let inputs = document.getElementById('inputs')
let city = document.getElementById('city')
let temp = document.getElementById('temp')
let img = document.getElementById('img')
let humidity = document.getElementById('humidity')
let speed = document.getElementById('speed')
let input_btn = document.getElementsByClassName('input_btn')[0]
let input = document.getElementsByClassName('input_s')[0]
let block = document.getElementsByClassName('bottom_text')[0]
const getWaether = async (city) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4a54e3ace384a71acf667897cc5e3095`)
    return res.json()
}

input_btn.onclick = () => {
    console.log(1);
    getWaether(input.value).then(data => {
        console.log(data);
        city.innerText = data.name
        temp.innerHTML = Math.round(data.main.temp - 273) + ' &deg C'
        humidity.innerHTML = data.main.humidity + ' %'
        speed.innerHTML = data.wind.speed + ' км.ч'
        img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    }).catch(error => {
        block.style.display = 'none'
        document.getElementsByTagName('h2')[0].innerText = 'Такого города нет!'
    })
}
getWaether('Osh').then(data => {
    console.log(data);
    city.innerText = data.name
    temp.innerHTML = Math.round(data.main.temp - 273) + ' &deg C'
    humidity.innerHTML = data.main.humidity + ' %'
    speed.innerHTML = data.wind.speed + ' км.ч'
    img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}).catch(error => {
    block.style.display = 'none'
    document.getElementsByTagName('h2')[0].innerText = 'Такого города нет!'
})