import React from 'react'
import {Link} from 'wouter'
import SearchResults from '../../components/SearchResults/index'

import './styles.css'

export default function Search({params}){
    const {city} = params
    const data = SearchResults({city})
    
    return <>
        {data.cod === 200 ? (
            <div>
                <h4>Current weather in {data.name} ({data.sys.country}):</h4>
                <ul>
                    <li>{data.weather[0].description} <img alt="weather icon" src={"http://openweathermap.org/img/wn/"+data.weather[0].icon+".png"} /></li>
                    <li>Current temperature: {data.main.temp}ºC</li>
                    <li>Minimum temperature: {data.main.temp_min}ºC</li>
                    <li>Maximum temperature: {data.main.temp_max}ºC</li>
                    <li>Clouds: {data.clouds.all}%</li>
                    <li>Wind: {data.wind.speed} m/s</li>
                </ul>
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
