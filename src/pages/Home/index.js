import React, {useState} from 'react'
import {useLocation} from 'wouter'

export default function Home () {
    const [city, setCity] = useState('')
    const [path, pushLocation] = useLocation()

    const handleChange = event => {
        setCity(event.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault()
        pushLocation(`/search/${city}`)
    }

    return <>
        <form onSubmit={handleSubmit}>
            <input placeholder="Type a city name..." type="text" onChange={handleChange} value={city} required />
            <button>Search</button>
        </form>
    </>
}
