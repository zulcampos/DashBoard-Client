import React,{useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';

export default function Weather() {
    //const allows to  modify the values of an array. In this case weather and setWeather 
    const[weather, setWeather] = useState(undefined);
    //UseEffect is your hook,, it tells that your commonent needs to do this after it renders
    useEffect(()=>{
        //axios creates a http get request to the url provided
        axios.get("http://localhost:8080/weather?lat=39.683723&lon=-75.749657")
        //.then return a promise(meaning once the url above is accessed then a response will be logges with the corresponding data by the console)
        .then(response => {
            console.log(response.data);
            setWeather(response.data);
        });
    },[]);
    //br= break in line 
    console.log("value of Weather:",weather);
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <React.Fragment>
                    <CardContent>
                        <Typography sx={{ fontSize: 18 }} gutterBottom>
                            Todays Forcast
                        </Typography>
                        <Typography variant="h6" component="div">
                            {weather?.main?.temp}
                        </Typography>
                        <Typography variant="body2">
                            Sunrise: {weather?.sys?.sunrise}
                            {/* hgfhyftygyg*/}
                            <br />
                            Sunset: {weather?.sys?.sunset}
                        </Typography>
                    </CardContent>
                </React.Fragment>
            </Card>
        </Box>
  );
}