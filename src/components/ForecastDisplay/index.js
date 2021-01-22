import React from 'react'
import {API_IMG_URL} from '../../services/settings'

import './styles.css'

export default function ForecastDisplay(props){
    const daily = props.daily
    const date = new Date()

    return (
        <ul>
            {daily.map((day, index) =>
                <li key={day.dt}>{date.getDate()+index + '/' + (date.getMonth()+1)}: <img alt="weather icon" src={API_IMG_URL+day.weather[0].icon+".png"} /> <span className="temp temp-min">{day.temp.min}ºC</span>-<span className="temp temp-max">{day.temp.max}ºC</span></li>
            )}
        </ul>
    )
}
