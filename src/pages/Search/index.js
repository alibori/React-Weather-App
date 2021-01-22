import React, {useState} from 'react'
import {Link} from 'wouter'
import {SearchResults, SearchForecastResults} from '../../components/SearchResults/index'
import ForecastDisplay from '../../components/ForecastDisplay/index'
import {API_IMG_URL} from '../../services/settings'

import './styles.css'

export default function Search({params}){
    const {city} = params
    const data = SearchResults({city})
    const [forecast, setForecast] = useState(false)

    const [mode, setMode] = useState('current')

    const onClick = (event) => {
        event.preventDefault()
        if (event.target.value === 'forecast' && !forecast) {
            SearchForecastResults(data.coord.lat, data.coord.lon).then(Response => {
                const data = Response
                setForecast(data)
            })
        }
        setMode(event.target.value)
    }
    
    return <>
        {data.cod === 200 ? (
            <div>
                <h4>Weather in {data.name} ({data.sys.country}):</h4>
                <button className="setView" value="current" onClick={onClick}>Current</button> <button className="setView" value="forecast" onClick={onClick}>8-day forecast</button>
                
                {mode === 'current' ? (
                    <ul>
                        <li>{data.weather[0].description} <img alt="weather icon" src={API_IMG_URL+data.weather[0].icon+".png"} /></li>
                        <li>Current temperature: {data.main.temp}ºC</li>
                        <li>Minimum temperature: {data.main.temp_min}ºC</li>
                        <li>Maximum temperature: {data.main.temp_max}ºC</li>
                        <li>Clouds: {data.clouds.all}%</li>
                        <li>Wind: {data.wind.speed} m/s</li>
                    </ul>
                ) : (
                    <div>
                        {forecast.daily ? (
                            <ForecastDisplay daily={forecast.daily} />
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                )}
                
                <Link to="/"><button>Search again</button></Link>
            </div>
        ) : (
            <div>
                {data.cod === '404' || data.cod === '429' || data.cod === '401' ? (
                    <div>
                        <p>Something went wrong, maybe you want to try again...</p>
                        <Link to="/"><button>Try Again!</button></Link>
                    </div>
                ) : (
                    <p>Loading...</p>
                ) }
            </div>
        )}
    </>
}
