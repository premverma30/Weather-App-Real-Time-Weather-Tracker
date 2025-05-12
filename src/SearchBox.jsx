import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("")
    let [error, setError] = useState(false)

    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const key = import.meta.env.VITE_API_KEY;

    let getWetherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${key}&units=metric`)
            let jsonResponse = await response.json()
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            };

            console.log(result);
            return result

        } catch (err) {
            throw err
        }


    }

    let handleChange = (eve) => {
        setCity(eve.target.value)
    }

    let handleSubmit = async (eve) => {

        try{
            eve.preventDefault()
            console.log(city)
            setCity("")
            let newInfo = await getWetherInfo()
            updateInfo(newInfo)
        }catch(err){
            setError(true)
        }


        
    }


    return (

        <div className='SearchBox'>

            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="filled" required value={city} onChange={handleChange} />
                <br />
                <Button variant="contained" type='submit' endIcon={<SendIcon />}>
                    Send
                </Button>
                {error && <p>No such place in our server</p>}

            </form>
        </div>

    )
}
