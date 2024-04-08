import React, { useEffect, useState } from 'react'
import "./WeatherCard.css"
const WeatherCard = ({ weatherInfo }) => {
    const[weatherState, setWeatherState] = useState("")
    const { temp, pressure, humidity, weathermood, name, speed, country, sunset } = weatherInfo;
    
    useEffect(()=>{
        if(weathermood){
            switch(weathermood){
                case "Haze":
                setWeatherState("wi-day-haze");
                break;
            case "Rain":
                setWeatherState("wi-day-rain");
                break;
            case "Clouds":
                setWeatherState("wi-day-cloudy");
                break;
            case "Clear":
                setWeatherState("wi-wu-clear");
                break;
            case "Snow":
                setWeatherState("wi-day-snow");
                break;
            case "Fog":
                setWeatherState("wi-day-fog");
                break;
            case "Sleet":
                setWeatherState("wi-day-sleet");
                break;
            case "Thunderstorm":
                setWeatherState("wi-day-thunderstorm");
                break;
            case "Smoke":
                setWeatherState("wi-smoke");
                break;
            case "Mist":
                setWeatherState("wi-dust");
                break;
            case "Drizzle":
                setWeatherState("wi-day-showers");
                break;
            case "Tornado":
                setWeatherState("wi-tornado");
                break;
            case "Hurricane":
                setWeatherState("wi-hurricane");
                break;
            case "Windy":
                setWeatherState("wi-windy");
                break;
            case "Partly Cloudy":
                setWeatherState("wi-day-cloudy");
                break;
            case "Mostly Cloudy":
                setWeatherState("wi-day-cloudy");
                break;
            case "Overcast":
                setWeatherState("wi-day-cloudy");
                break;
            case "Dust":
                setWeatherState("wi-dust");
                break;
            case "Sand":
                setWeatherState("wi-sandstorm");
                break;
            case "Ash":
                setWeatherState("wi-volcano");
                break;
            default:
                setWeatherState("wi-day-sunny"); // Default case: sunny weather icon
                break;
            }
        }
    },[weathermood])
    
    
    let sec = sunset;
    let date = new Date(sec * 1000)
    let timestr = `${date.getHours()}:${date.getMinutes()}`
    return (
        <>
            <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">{weathermood}</div>
                        <div className="place">{name}, {country}</div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>
                <div className="extra-info">
                    <div className="temp-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {timestr} PM <br />
                                Sunset
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {humidity} <br />
                                Humidity
                            </p>
                        </div>
                    </div>
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {pressure} MM <br />
                                Pressure
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {speed} km/h <br />
                                Speed
                            </p>
                        </div>
                    </div>
                </div>
            </article>

        </>
    )
}

export default WeatherCard