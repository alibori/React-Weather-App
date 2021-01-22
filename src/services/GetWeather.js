import {API_KEY, API_URL} from './settings'

export default function GetWeather({city}){
    const apiUrl = `${API_URL}/weather?q=${city}&units=metric&APPID=${API_KEY}`
       
    return fetch(apiUrl)
        .then(res => res.json())
        .then(response => {
          const data = response
          return data
        })
}
