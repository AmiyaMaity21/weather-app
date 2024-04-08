import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "../WeatherCard/WeatherCard";
import "./Home.css";
const Home = () => {
  const [searchInput, setSearchInput] = useState("Kolkata");
  const [weatherInfo, setWeatherInfo] = useState({});
  const getWeatherInfo = async () => {
    try {
      const reqUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=metric&appid=5d18b8aa21d3e083d0c3073449620d05`;
      const response = await axios.get(reqUrl);
      console.log(response.data);
      const result = response.data;
      const { temp, pressure, humidity } = result.main;
      const { main: weathermood } = result.weather[0];
      const { name } = result;
      const { speed } = result.wind;
      const { country, sunset } = result.sys;
      const newWeatherInfo = {
        temp,
        pressure,
        humidity,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };
      setWeatherInfo(newWeatherInfo);
    } catch (error) {
      console.log(error);
      alert("something west wrong! please try again after sometimes");
    }
  };
  useEffect(() => {
    getWeatherInfo();
},[]);
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search...."
            autoFocus
            className="searchTerm"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          ></input>
          <button className="searchButton" onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>
      <WeatherCard weatherInfo={weatherInfo} />
    </>
  );
};

export default Home;
