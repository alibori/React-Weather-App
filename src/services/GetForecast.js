import {API_KEY, API_URL} from './settings'

export default function GetForecast(lat, lon){
    const apiUrl = `${API_URL}/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    
    return fetch(apiUrl)
        .then(res => res.json())
        .then(response => {
            const data = response
            return data
        })
}
