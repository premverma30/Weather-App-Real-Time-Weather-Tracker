import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function WetherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Giridih",
        feelsLike: 37.62,
        humidity: 41,
        temp: 35.05,
        tempMax: 35.05,
        tempMin: 35.05,
        weather: "haze"
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Wether App by Prem</h2>

            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}
