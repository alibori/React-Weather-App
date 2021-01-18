const apiKey = 'f2fe3d64231c5b0d14cf4e839a02d453'

export default function GetWeather({city}){
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`
       
    return fetch(apiUrl)
        .then(res => res.json())
        .then(response => {
          const data = response
          return data
        })
}