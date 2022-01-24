import React from 'react';
import WeatherCard from './WeatherCard';
import { useWeatherContext } from '../context/WeatherContext';

function WeatherContainer() {
    const context = useWeatherContext();

    console.log(context)
    const handleChange = (e) => {
        context.setCity(e.target.value)
    }

    return <div>
        <div className='flex flex-col w-auto h-auto pt-10 bg-transparent justify-start items-center'>

            <div className="">
                <img alt="weatherIcon" src="weather.png" className="w-36 h-36"></img> {/*Weather PNG*/}
            </div>

            <div className="text-5xl  text-center w-auto h-max text-white">
                <h1 className='mt-5 mb-5'>Hava Durumu Uygulaması</h1> {/*Başlık*/}
                
                
            </div>

            <div className='mt-5 text-white'>   {/*Şehir Seçme Card*/}
                <label htmlFor={"cities"}>Lütfen bir şehir seçin.</label>
                
                <select onChange={handleChange} id="cities " className='text-black border-cyan-300 rounded-xl ml-3'> {/*Dinamik hale gelecek*/}
                
                    <option value="Ankara">Ankara</option>
                    <option value="Istanbul">İstanbul</option>
                    <option value="Eskişehir">Eskişehir</option>
                    <option value="Düzce">Düzce</option>
                </select>
                
            </div>

        </div>
        <div className='flex justify-center'>
            <WeatherCard></WeatherCard>
        </div>


    </div>;
}

export default WeatherContainer;
