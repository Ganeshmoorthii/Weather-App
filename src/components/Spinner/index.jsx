// src/components/Spinner.jsx
import React from "react";
import Lottie from "lottie-react";
// import weatherLoading from "../assets/weather-loading.json"; 
import weatherLoading from "../../assets/weather-loading.json";
// D:\Projects\weather-app\src\assets\weather-loading.json// Adjust the path as necessary

const Spinner = ({ height = 150, width = 150 }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Lottie
        animationData={weatherLoading}
        loop={true}
        style={{ height: `${height}px`, width: `${width}px` }}
      />
    </div>
  );
};

export default Spinner;
