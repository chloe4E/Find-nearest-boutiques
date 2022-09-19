import React, { useState } from "react";
import { Button } from "reactstrap";

import GetFive from "../components/GetFive";

function HomePage() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [posLatitude, setPosLatitude] = useState(false);
  const [posLongitude, setPosLongitude] = useState(false);
  const [showFive, setShowFive] = useState(false);

  const toggleShow = () => {
    setShowFive(!showFive);
  };
  const geoFindMe = () => {
    const status = document.querySelector("#status");

    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setPosLatitude(latitude);
      setPosLongitude(longitude);
      status.textContent = `Your retrieved coordinates are :
      latitude: ${latitude} ° and longitude: ${longitude} °`;
      setIsSuccess(true);
    }

    function error() {
      status.textContent = "Unable to retrieve your location";
    }

    if (!navigator.geolocation) {
      status.textContent = "Geolocation is not supported by your browser";
    } else {
      status.textContent = "Locating…";
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  return (
    <div>
      <h3 className="text-start mb-2 mt-2 mx-2">Instructions</h3>
      <p className="text-start mb-2 mt-2 mx-2">
        Please click the "locate me" button to get started
      </p>
      <Button
        id="find-me"
        onClick={geoFindMe}
        color="primary"
        className="mt-2 mb-2"
      >
        Locate me
      </Button>
      <br />
      <p id="status"></p>
      <p id="current-latitude"></p>
      <p id="current-longitude"></p>
      {isSuccess ? (
        <>
          <Button
            id="show-me-five"
            onClick={toggleShow}
            color="primary"
            className="mt-2 mb-2"
          >
            {showFive ? "Hide" : "Show me the nearest 5 boutiques"}
          </Button>
        </>
      ) : (
        ""
      )}
      {showFive && <GetFive posLat={posLatitude} posLon={posLongitude} />}
    </div>
  );
}

export default HomePage;
