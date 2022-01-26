import WeatherContainer from './components/WeatherContainer.js';
import { WeatherProvider } from './context/WeatherContext.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className='bg-gradient-to-r from-green-400 to-blue-500 shadow-lg h-full'>
      <div className=' w-5/6 m-auto'>
        <WeatherProvider>
          <WeatherContainer />
          <Footer />
        </WeatherProvider>
      </div>
    </div>


  );
}

export default App;
