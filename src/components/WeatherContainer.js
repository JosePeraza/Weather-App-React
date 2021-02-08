import Temperature from "./Temperature";
import Description from "./Description";
import Location from "./Location";
import Icon from "./Icon"
import Button from "./ConversionButton.js";
import { useState, useEffect } from "react";
import axios from 'axios';



const WeatherContainer = () => {

//   let long = "";
//   let lat = "";

// navigator.geolocation.getCurrentPosition(function(position) {
//     long = position.coords.longitude;
//     lat = position.coords.latitude;
// });
    

  const proxy = "https://cors-anywhere.herokuapp.com/";  
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

      axios(`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_key}`)
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
        <div id="app-container">
        <Location city={city} country={country}/>
        <Icon icon_id={icon}/>
        <Temperature temp={Math.round(temp - 273)}/>
        <Description description={description}/>
        <Button/>
    </div>
    );
};

export default WeatherContainer;