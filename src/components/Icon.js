const Icon = ({ icon_id }) => {
    const iconURL = "http://openweathermap.org/img/wn/" + icon_id + "@2x.png"
    return (
        <div>
            <img id="temp-icon" src={iconURL} alt="Getting weather icon..."/>
        </div>
    );
};

export default Icon;