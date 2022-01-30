import axios from 'axios';
import {useContext,createContext, useState, useEffect} from 'react';

const WeatherContext = createContext();


export const WeatherProvider = ({children}) => {
        const [city,setCity] = useState('Ankara');
        const [data,setData] = useState(null);
        const [language,setLanguage]= useState("tr");


        const baseURL ='https://api.collectapi.com/weather/getWeather?';
        let languageStr='data.lang='+language;
        let cityName ='&data.city='+city;
        let url = baseURL+languageStr+cityName;
        
        const config = {
            headers: {
                authorization:'YOUR API KEY',
                'content-type':'application/json'
            }
          
        }
        
        
        useEffect(()=> {
           
           axios.get(url,config) 
           .then(data => setData(data.data))
           
         
        })


        const values = {
            city,
            setCity,
            data,
            setData,
            language,
            setLanguage
        };



        return<WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>


}

export const useWeatherContext = () =>  useContext(WeatherContext);