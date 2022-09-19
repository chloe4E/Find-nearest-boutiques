import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Button } from "reactstrap";

import BoutiqueCard from "./BoutiqueCard.js";

function GetFive(props) {
  const [boutiqueList, setBoutiqueList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const { posLat } = props;
  const { posLon } = props;
  useEffect(() => {
    getAllBoutiques();
  }, []);

  const getAllBoutiques = () => {
    axios
      .get(
        `https://4149o8lffa.execute-api.eu-west-1.amazonaws.com/challenge/boutiques`
      )
      .then((res) => {
        const boutiques = res.data;
        setBoutiqueList({ boutiques });
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  //// =========////
  // compute distance:
  function distance(lat1, lon1, lat2, lon2) {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    return dist;
  }
  //// =========////
  let fiveList = [];
  let distBout = () => {
    if (!loading) {
      for (var i = 0; i < boutiqueList.boutiques.length; i++) {
        boutiqueList.boutiques[i].dist = distance(
          posLat,
          posLon,
          boutiqueList.boutiques[i].location.lat,
          boutiqueList.boutiques[i].location.lon
        );
      }

      fiveList = boutiqueList.boutiques
        .sort((a, b) => {
          return a.dist - b.dist;
        })
        .slice(0, 5);
    }
  };

  distBout();

  const listItems = fiveList.map((d) => (
    <>
      <Card body key={d.name} className="mb-2">
        <Card.Title>{d.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted fst-italic fw-light">
          {d.founder_quote}
        </Card.Subtitle>
        <Card.Text className="text-start">{d.description}</Card.Text>
      </Card>
    </>
  ));

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h3 className="text-start mb-2 mt-2 mx-2">
        The 5 nearest boutiques are:{" "}
      </h3>
      <div className="mb-2 mt-2 mx-5">{listItems}</div>
      <hr />
      <Button onClick={toggleShowAll} color="info" className="mt-2 mb-2">
        {showAll ? "Hide all the boutiques" : "Show me all the boutiques"}
      </Button>

      {showAll && (
        <>
          <h3 className="text-start mb-2 mt-2 mx-2">All boutiques: </h3>
          <BoutiqueCard boutiqueData={boutiqueList} />
        </>
      )}
    </>
  );
}

export default GetFive;
