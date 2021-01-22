import {useState, useEffect} from 'react'
import GetWeather from '../../services/GetWeather'
import GetForecast from '../../services/GetForecast'

export function SearchResults({city}){
    const [data, setData] = useState({})

    useEffect(function(){
        GetWeather({city}).then(result => setData(result))
    }, [city])
    
    return data
}

export function SearchForecastResults(lat, lon){
    
    // const [data, setData] = useState([])

    // useEffect(function(){
    const data = GetForecast(lat, lon).then(result => {
        const res = result
        return res
    })
    // }, [lat, lon])

    return data
}
