import React from 'react';
import { useWeatherContext } from '../context/WeatherContext';

function WeatherCard() {
    const context = useWeatherContext();
    const weatherData = context.data;

    return <div>


        <div className='h-max w-screen-md  text-white border-cyan-600 rounded-xl'>

            <div className='text-center text-xl '>{context.city} Hava Durumu</div>
        </div>

        <div className="flex flex-wrap items-center justify-center">

            {
                weatherData != null ? weatherData.result.map((result, index) => {
                    return (

                        <div key={index} className="w-48 m-5 px-3 py-3 text-center shadow-2xl hover:px-1 hover:py-1">
                            <h1 className='p-2 m-2 text-white'>{result.date}</h1>
                            <h1 className='p-2 m-2 text-white'>{result.day}</h1>
                            <hr/>
                            <img alt="IMG" src={result.icon} className="w-auto h-auto mt-5"></img>
                            <h5 className='text-white mt-2'>{result.description.toUpperCase()}</h5>
                            <h2 className='p-2 m-2 text-white' >Maksimum Sıcaklık: {result.max}</h2>
                            <h2 className='p-2 m-2 text-white' >Minimum Sıcaklık Sıcaklık: {result.min}</h2>

                        </div>
                    )
                }) : false
            }

        </div>

    </div>;
}

export default WeatherCard;
