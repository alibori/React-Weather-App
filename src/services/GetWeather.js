const apiKey = 'PASTE YOUR API KEY HERE'

export default function GetWeather({city}){
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`
       
    return fetch(apiUrl)
        .then(res => res.json())
        .then(response => {
          const data = response
          return data
        })
}
