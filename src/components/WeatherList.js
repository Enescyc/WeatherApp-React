import React from 'react';
import WeatherCard from './WeatherCard';

function WeatherList() {
    return <div>
        <div className='flex w-auto h-auto bg-transparent justify-center items-center'>
            <label for={"cities"}>Lütfen bir şehir seçin.</label>
            <select id="cities "className='text-black border-cyan-300 rounded-xl ml-3'>
            <option value="volvo">İstanbul</option>
            <option value="saab">Ankara</option>
            <option value="fiat">Eskişehir</option>
            <option value="audi">Düzce</option>
            </select> 
        </div>
        <WeatherCard></WeatherCard>

    </div>;
}

export default WeatherList;
