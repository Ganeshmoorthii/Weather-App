import React, { useEffect, useState } from "react";
import "./index.css";

import WbCloudyIcon from "@mui/icons-material/WbCloudy";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import GrainIcon from "@mui/icons-material/Grain";

function WeatherCard({ currentWeather }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000); // Update every second
    return () => clearInterval(timer);
  }, []);

  if (!currentWeather) return null;

  const dateStr = time.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dayStr = time.toLocaleDateString("en-US", { weekday: "long" });
  const timeStr = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "Clouds":
        return (
          <WbCloudyIcon style={{ fontSize: "40px", marginRight: "8px" }} />
        );
      case "Clear":
        return <WbSunnyIcon style={{ fontSize: "40px", marginRight: "8px" }} />;
      case "Rain":
        return <GrainIcon style={{ fontSize: "40px", marginRight: "8px" }} />;
      case "Thunderstorm":
        return (
          <ThunderstormIcon style={{ fontSize: "40px", marginRight: "8px" }} />
        );
      case "Night":
      case "Mist":
      case "Fog":
        return (
          <NightsStayIcon style={{ fontSize: "40px", marginRight: "8px" }} />
        );
      default:
        return (
          <WbCloudyIcon style={{ fontSize: "40px", marginRight: "8px" }} />
        );
    }
  };
  const condition = currentWeather.weather[0].main;

  return (
    <div className="weather-card">
      <h1 className="left-content temp">{currentWeather.name}, IN</h1>
      {/* <hr style={{ margin: "10px 0", borderColor: "#ccc" }} /> */}
      <p className="left-content">
        <strong>{timeStr}</strong>
      </p>
      <p className="left-content">
        <strong>{dateStr}</strong>{" "}
      </p>
      <p className="left-content">
        <strong>{dayStr}</strong>{" "}
      </p>

      <div className="weather-icon-container">
        {getWeatherIcon(condition)}
        <span>{condition}</span>
      </div>
      <p className="left-content temp">{currentWeather.main.temp}°C</p>
      <p className="left-content">Humidity: {currentWeather.main.humidity}%</p>
      <p className="left-content">Wind: {currentWeather.wind.speed} km/h</p>

      {/* New Date/Time Section */}
    </div>
  );
}

export default WeatherCard;
