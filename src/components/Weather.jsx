import React, { useState } from "react";
import axios from "axios";

function Weather() {
  const [data, setData] = useState({});
  const [city, setCity] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fb336a7dcc475fb13e2e8d3cb229a19`;
  const searchCity = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((res) => {
        setData(res.data);
      });
      setCity("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          placeholder="Enter Your City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={searchCity}
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="city">
            <p>{data.name}</p>
            {data.sys ? <p>{data.sys.country}</p> : null}
          </div>
          <div className="temp">
            {data.main ? (
              <h1>{Math.round(data.main.temp - 273.15)}°C</h1>
            ) : null}
          </div>
          <div className="desc">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main ? (
              <p>{Math.round(data.main.feels_like - 273.15)}°C</p>
            ) : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? (
              <p>{Math.round(data.wind.speed * 1.60934)} Kmph</p>
            ) : null}
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Weather;
