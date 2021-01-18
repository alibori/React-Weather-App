import {useState, useEffect} from 'react'
import GetWeather from '../../services/GetWeather'

export default function SearchResults({city}){
    const [data, setData] = useState({})

    useEffect(function(){
        GetWeather({city}).then(result => setData(result))
    }, [city])
    
    return data
}
