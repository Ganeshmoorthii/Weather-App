// src/App.jsx

import { useEffect, useState } from "react";
import { getWeatherByCoords, getForecastByCity } from "./utils/api";
import WeatherCard from "./components/WeatherCard";
import WeatherChart from "./components/WeatherChart";
import VantaClouds from "./components/VantaClouds";
import TopCities from "./components/TopCities";
import Spinner from "./components/Spinner";
import "./App.css";

function App() {
  const [selectedCity, setSelectedCity] = useState("Chennai");
  const [forecastData, setForecastData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const forecastRes = await getForecastByCity(selectedCity);
        const weatherRes = await getWeatherByCoords(
          forecastRes.data.city.coord.lat,
          forecastRes.data.city.coord.lon
        );

        setForecastData(forecastRes.data.list.slice(0, 8));
        setCurrentWeather(weatherRes.data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to load weather data. Please check your connection.");
      } finally {
        setIsLoading(false);
      }
    };

    if (selectedCity) fetchData();
  }, [selectedCity]);

  return (
    <>
      <VantaClouds />
      <TopCities setSelectedCity={setSelectedCity} />
      <div className="bottom">
        {isLoading ? (
          <div className="error-container">
            <Spinner />
          </div>
        ) : error ? (
          <div className="error-container">
            <p className="error-para">{error}</p>
          </div>
        ) : (
          <>
            <WeatherCard currentWeather={currentWeather} />
            <WeatherChart
              forecastData={forecastData}
              selectedCity={selectedCity}
            />
          </>
        )}
      </div>
    </>
  );
}

export default App;