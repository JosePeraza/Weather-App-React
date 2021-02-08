import Temperature from "./Temperature";
import Description from "./Description";
import Location from "./Location";
import Icon from "./Icon"
import Button from "./ConversionButton.js";
import { useState, useEffect } from "react";
import axios from 'axios';


const WeatherContainer = () => {

//     let long = "";
//     let lat = "";    

// navigator.geolocation.getCurrentPosition(function(position) {
//     long = position.coords.longitude;
//     lat = position.coords.latitude;
// });
    

  const proxy = "https://cors-anywhere.herokuapp.com/";  
  const API_key = "84fd28923a555889ecefa814ab98bb62";
  

  // const [city, setCity] = useState("");
  // const [country, setCountry] = useState("");
  // const [icon, setIcon] = useState("");
  const [temp, setTemp] = useState("");
  // const [description, setDescription] = useState("");

  useEffect(() => {
    axios(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat=20.9498961&lon=-89.5955872&appid=84fd28923a555889ecefa814ab98bb62`)
    .then((res) => {
    //   setValue(res.data);
      setTemp(res.data.main.feels_like);
    })
  })

  

    return (
        <div id="app-container">
        <Location/>
        <Icon/>
        <Temperature temp={Math.round(temp - 273)}/>
        <Description/>
        <Button/>
    </div>
    );
};

export default WeatherContainer;