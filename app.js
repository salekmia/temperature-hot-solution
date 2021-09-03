const getTemperature = () => {
    const tempInput = document.getElementById('temp-input')
    const tempText = tempInput.value
    const apiKey = `207bea44abeb3a18c6d86398cc6b7dca`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${tempText}&units=metric&appid=${apiKey}`
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemp(data))
}

const getId = (id, info) => {
    document.getElementById(id).innerText = info
}

const displayTemp = (temperature) => {
    console.log(temperature)
    getId('city-name', `${temperature.name}`)
    getId('cel-temp', `${temperature.main.temp}`)
    getId('cloud', `${temperature.weather[0].main}`)

    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const img = document.getElementById('img')
    img.setAttribute('src', url)
}