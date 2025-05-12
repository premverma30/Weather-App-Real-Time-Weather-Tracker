import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';


export default function InfoBox({ info }) {
    const INIT_URL = "https://cdn.dnaindia.com/sites/default/files/2022/05/03/1686290-dust-storm-ians.jpg?im=FitAndFill=(1200,900)"
    let COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    let HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let RAIN_URL = "https://plus.unsplash.com/premium_photo-1725408051956-a6dc142169bd?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    return (
        <div className="InfoBox">

            <div className='cardContainer'>


                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            
                            {info.city}{" "}
                            {info.humidity > 80 ? (
                                <ThunderstormIcon />
                            ) : info.temp > 15 ? (
                                <SunnyIcon />
                            ) : (
                                <AcUnitIcon />
                            )}

                        </Typography>

                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Temperature = {info.temp}&deg;C
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Humidity = {info.humidity}&deg;C
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Min Temperature = {info.tempMin}&deg;C
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Max Temperature = {info.tempMax}&deg;C
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
                        </Typography>
                    </CardContent>


                </Card>
            </div>
        </div>
    )
}
