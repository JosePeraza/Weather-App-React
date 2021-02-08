import { useState, useEffect } from "react";

const Temperature = ({ temp }) => {
    const [isDegreeC, setDegreeC] = useState(true);
   

  const handleDegree = () => {
    if(isDegreeC === true ){
        setDegreeC(false);
    } 
    else {
        setDegreeC(true)
    }
  }
    
    return (
        
        <div>
            <div className="temp">
                <p><span className="temp-value">{ isDegreeC ? Math.round(temp - 273)+'°C' : Math.round(((temp-273.15)*1.8)+32)+'°F' }</span></p>
            </div>
            <button onClick={handleDegree} className="button">Degrees °F/°C</button>
        </div>
    );
};

export default Temperature;