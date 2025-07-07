// src/components/TopCities.jsx
import React from "react";
import "./index.css";
import HexImage from "../HexImage";
import SearchBar from "../SearchBar";

function TopCities({ setSelectedCity }) {
  const handleSearch = (cityName) => {
    if (cityName) {
      setSelectedCity(cityName);
    }
  };

  return (
    <div className="top-cities-container">
      <div className="top-cities">
        {[
          { name: "Delhi", img: "https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg", temp: "30°C" },
          { name: "Mumbai", img: "https://www.holidaymonk.com/wp-content/uploads/2022/04/Gateway-Of-India-MUMBAI.jpg", temp: "30.8°C" },
          { name: "Chennai", img: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Chennai_train_station.jpg", temp: "35°C" },
          { name: "Kolkata", img: "https://cdn.britannica.com/91/110191-050-7BCFD56B/Victoria-Memorial-Hall-Kolkata-India.jpg", temp: "29°C" },
          { name: "Bangalore", img: "https://cdn.enjoytravel.com/img/Big7Enjoy/en/travel-news/interesting-facts/interesting-facts-bangalore/bangalore_is_the_silicon_valley_of_india_medium_768.webp", temp: "32°C" },
        ].map((city) => (
          <div key={city.name} className="city" onClick={() => handleSearch(city.name)}>
            <HexImage src={city.img} alt={city.name} />
            <div className="city-text">
              <h1>{city.name}</h1>
              <p>Clouds</p>
              <p>{city.temp}</p>
            </div>
          </div>
        ))}
      </div>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}

export default TopCities;
