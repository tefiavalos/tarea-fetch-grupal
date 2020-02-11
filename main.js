fetch(`http://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&units=metric&appid=f36502b94a34abba6b941ece369c5289`)
.then(res=> res.json())//devuelve promesa
.then(info => {console.log(info)
    const contenedor = document.getElementById("contenedor")
    contenedor.innerHTML=`
    <div>${info.name}</div>
    <div>${info.main.temp}</div>
    <div>${info.weather[0].description}</div>
    <div>Viento: ${info.wind.speed}/${info.wind.deg}</div>
    <div>Humedad: ${info.main.humidity}</div>`
    
})


