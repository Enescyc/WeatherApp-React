import WeatherList from './components/WeatherList.js';

function App() {
  return (
    <div className="h-full w-full text-white  bg-gradient-to-r from-cyan-300 to-blue-800   flex flex-col items-center justify-start">
      
        <div className="w-max m-10">
        <img alt="weatherIcon" src="weather.png" className="w-24 h-24"></img>
        </div>

        <div className="text-5xl p-10 text-center w-auto h-max ">
        <h1>Hava Durumu Uygulaması</h1>
        <h3 className="text-center ">Patika.dev</h3>
        </div>
        <WeatherList></WeatherList>
        

    </div>
  );
}

export default App;
