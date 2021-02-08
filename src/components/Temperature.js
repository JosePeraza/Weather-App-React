
const Temperature = ({ temp }) => {
    return (
        <div id="temp">
            <p><span id="temp-value">{temp}°C</span></p>
        </div>
    );
};

export default Temperature;