// src/components/WeatherChart.jsx
import React, { useMemo } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WeatherChart = ({ forecastData, selectedCity }) => {
  if (!forecastData || forecastData.length === 0) {
    return <p style={{ color: "white" }}>Loading chart...</p>;
  }

  // Generate dynamic dot colors only when forecastData.length changes
  const dotColors = useMemo(() => {
    return Array.from(
      { length: forecastData.length },
      (_, i) => `hsl(${(i * 360) / forecastData.length}, 70%, 60%)`
    );
  }, [forecastData.length]);

  const chartData = {
    labels: forecastData.map((d) => d.dt_txt),
    datasets: [
      {
        label: `Temperature in ${selectedCity}`,
        data: forecastData.map((d) => d.main.temp),
        borderColor: "blue",
        fill: false,
        pointBackgroundColor: "white",
        pointBorderColor: dotColors,
        pointBorderWidth: 1.5,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointStyle: "circle",
      },
    ],
  };

  return (
    <div style={{ width: "100%", height: "470px" }} className="chart-wrapper"   >
      <Line
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: true, position: "top" },
            title: {
              display: true,
              text: `24 Hour Temperature Forecast for ${selectedCity}`,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              min: 0,
              max: 50,
              ticks: { stepSize: 2 },
            },
          },
        }}
      />
    </div>
  );
};

export default WeatherChart;
