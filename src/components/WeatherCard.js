import React from 'react';
import { useWeatherContext } from '../context/WeatherContext';

function WeatherCard() {
    const context = useWeatherContext();
    const weatherData = context.data;

    return <div>


        <div className='h-max w-screen-md  text-white border-cyan-600 rounded-xl'>

            <div className='text-center text-xl '>{context.language ==="tr" ? context.city + " Hava Durumu" : context.city + " Weather"}</div>

        </div>

        <div className="flex flex-wrap items-center justify-center">

            {
                weatherData != null ? weatherData.result.map((result, index) => {
                    return (

                        <div key={index} className="flex flex-col items-center w-96 m-5 px-5 py-5 text-center shadow-md hover:shadow-2xl hover:text-2yx hover:px-10 ">
                            <h1 className='p-2 m-2 text-white'>{result.date}</h1>
                            <h1 className='p-2 m-2 text-white'>{result.day}</h1>
                            <hr />
                            <img alt="IMG" src={result.icon} className="w-24 h-auto mt-5"></img>
                            <h5 className='text-white mt-2'>{result.description.toUpperCase()}</h5>
                            <h2 className='p-2 m-2 text-white' >{context.language === "tr" ? "Maksimum Sıcaklık:" + result.max : "Maximum Tempeature:" + result.max}</h2>
                            <h2 className='p-2 m-2 text-white' >{context.language === "tr" ? "Minimum Sıcaklık:" + result.min : "Minimum Tempeature:" + result.min}</h2>

                        </div>
                    )
                }) : false
            }

        </div>

    </div>;
}

export default WeatherCard;
