import axios from 'axios';
import {useContext,createContext, useState, useEffect} from 'react';

const WeatherContext = createContext();


export const WeatherProvider = ({children}) => {
        const [city,setCity] = useState('Ankara');
        const [data,setData] = useState(null);


        let baseURL ='https://api.collectapi.com/weather/getWeather?';
        let language='data.lang=tr';
        let cityName ='&data.city='+city;
        let url = baseURL+language+cityName;
        
        let config = {
            headers: {
                authorization:'apikey 5dK6hBrLKijuoBe86vNeZ2:6pjSPd5hG01q1Kye0U6CIG',
                'content-type':'application/json'
            }
          
        }
        console.log(cityName)

        useEffect(()=> {
                
                axios.get(url,config) 
                .then(data => setData(data.data))
        },[city]);

        
        useEffect(()=> {
           
           axios.get(url,config) 
           .then(data => setData(data.data))
           
         
        },[])

        const values = {
            city,
            setCity,
            data,
            setData
        };



        return<WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>


}

export const useWeatherContext = () =>  useContext(WeatherContext);