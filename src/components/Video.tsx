import { useEffect, useState } from "react";
import "./Video.scss";

const Video = () => {
  const [height, setHeight] = useState(window.innerHeight * 0.66);
  const [width, setWidth] = useState(window.innerWidth * 0.66);

  const handleResize = () => {
    setHeight(window.innerHeight * 0.65);
    setWidth(window.innerWidth * 0.65);
    if (window.innerWidth <= 850) {
      setWidth(window.innerWidth * 0.9);
    }
  };

  window.addEventListener("resize", handleResize);

  useEffect(() => {
    handleResize();
  }, []);

  return (
    <iframe
      className="video"
      width={width}
      height={height}
      src="https://www.youtube.com/embed/cx9mItuLdIs?&autoplay=1"
      title="Paraparaumu Beach (Kapiti) Surfcam"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      frameBorder={0}
    ></iframe>
  );
};

export default Video;
