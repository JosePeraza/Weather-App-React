const Icon = ({ icon_id }) => {
    const iconURL = "https://openweathermap.org/img/wn/" + icon_id + "@2x.png"
    return (
        <div>
            <img className="temp-icon" src={iconURL} alt="Getting weather icon..."/>
        </div>
    );
};

export default Icon;