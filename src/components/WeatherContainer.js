import React from 'react';
import WeatherCard from './WeatherCard';
import { useWeatherContext } from '../context/WeatherContext';

function WeatherContainer() {
    const context = useWeatherContext();


    const cityHandleChange = (e) => {
        context.setCity(e.target.value)
    }
    const languageHandleChange = (e) => {
        context.setLanguage(e.target.value)
    }


    return <div>
        <div className='relative w-auto h-auto text-center'>
        <div className='top-0 r-0  w-20 h-10 '>
            
          <select onChange={languageHandleChange} id="language"className='bg-transparent'>
                <option value={"tr"}>Türkçe</option>
                <option value={"en"}>İngilizce</option>
          </select>
          
          
        </div>
        </div>
        <div className='flex flex-col w-auto h-auto pt-10 bg-transparent justify-start items-center'>

            <img alt="weatherIcon" src="weather.png" className="w-36 h-36"></img> {/*Weather PNG*/}

            <div className="text-5xl  text-center w-auto h-max text-white">
                <h1 className='mt-5 mb-5'>Hava Durumu Uygulaması</h1> {/*Başlık*/}
            </div>

            <div className='mt-5 text-white'>   {/*Şehir Seçme Card*/}
                <label htmlFor={"cities"}>{context.language==="tr" ? "Lütfen bir şehir seçin" : "Please Select City."}</label>

                <select onChange={cityHandleChange} id="cities " className='text-black border-cyan-300 rounded-xl ml-3 w-24 h-12 m-3'> {/*Dinamik hale gelecek*/}

                    <option className="m-3" value="Ankara">Ankara</option>
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
