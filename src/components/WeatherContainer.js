import Temperature from "./Temperature";
import Description from "./Description";
import Location from "./Location";
import Icon from "./Icon"
import { useState, useEffect } from "react";
import axios from 'axios';



const WeatherContainer = () => {
    
  const API_key = "84fd28923a555889ecefa814ab98bb62";
  

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [icon, setIcon] = useState("");
  const [temp, setTemp] = useState("");
  const [description, setDescription] = useState("");
  
  
  useEffect(() => {

    navigator.geolocation.getCurrentPosition(function(position) {
      let long = position.coords.longitude;
      let lat = position.coords.latitude;

      axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_key}`)
      .then((res) => {
      setCity(res.data.name);
      setCountry(res.data.sys.country);
      setIcon(res.data.weather[0].icon);
      setTemp(res.data.main.feels_like);
      setDescription(res.data.weather[0].description);
    })
    });
  },[]);

    return (
        <div className="app-container">
        <Location city={city} country={country}/>
        <Icon icon_id={icon}/>
        <Description description={description}/>
        <Temperature temp={temp}/>
    </div>
    );
};

export default WeatherContainer;