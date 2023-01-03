import { useEffect, useState } from "react";
import "./Windy.scss";

const Windy = () => {
  const [height, setHeight] = useState(window.innerHeight * 0.66);
  const [width, setWidth] = useState(window.innerWidth * 0.66);

  const handleResize = () => {
    setHeight(window.innerHeight * 0.65);
    setWidth(window.innerWidth * 0.65);
    if (window.innerWidth <= 850) {
      setWidth(window.innerWidth * 0.9);
      setHeight(window.innerHeight * 0.9);
    }
  };

  window.addEventListener("resize", handleResize);

  useEffect(() => {
    handleResize();
  }, []);

  return (
    <iframe
      width={width}
      height={height}
      src="https://embed.windy.com/embed2.html?lat=-40.931&lon=174.982&detailLat=-40.884&detailLon=174.982&width=650&height=450&zoom=13&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1"
      frameBorder="0"
    ></iframe>
  );
};

export default Windy;
