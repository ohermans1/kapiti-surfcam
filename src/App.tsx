import React from "react";
import "./App.scss";
import Video from "./components/Video";
import Advert from "./components/Advert";
import Weather from "./components/Weather";
import Tides from "./components/Tides";
import Windy from "./components/Windy";

function App() {
  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">Kapiti Surfcam</h1>
      </header>
      <main className="main">
        <div className="widget-group">
          <Weather />
          <Tides />
        </div>
        <div className="iframe-group">
          <Video />
          <Windy />
        </div>
        <Advert />
      </main>

      <footer className="footer">Created by Ollie Hermans 2023</footer>
    </div>
  );
}

export default App;
