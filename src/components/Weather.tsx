import "./Weather.scss";

const Weather = () => {
  return (
    <iframe
      className="weather"
      id="widget-iframe"
      width="160px"
      height="231px"
      src="https://services.metservice.com/weather-widget/widget?params=blue|medium|portrait|days-1|modern&loc=kapiti&type=urban"
    ></iframe>
  );
};

export default Weather;
