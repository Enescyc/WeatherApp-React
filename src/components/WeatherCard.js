import React from 'react';

function WeatherCard() {
    return <div>


        <div className='h-max w-screen-md  text-white border-cyan-600 rounded-xl'>
            <div className='text-center text-3xl'>Istanbul Hava Durumu</div>
        </div>

        <div className="flex items-center justify-center">

            <div className="w-max m-10 px-3 py-3text-center shadow-2xl shadow-inner">
                <h1 className='p-2 m-2'>Pazartesi</h1>
                <img alt="IMG" src="weather.png" className="w-24 h-24"></img>
                <h2 className='p-2 m-2' >46 derece</h2>
            </div>

        </div>

    </div>;
}

export default WeatherCard;
