import React, { useState } from "react";
import "./App.css";
import destinations from "./assets/destinations.json";
import DestinationBox from "./assets/destinationBox";

function App() {
  const [destinationList, setDestinationList] = useState(destinations);

  const markAsVisitied = (name) => {
    const updatedDestinations = destinationList.map((destination) =>
      destination.name == name ? { ...destination, visted: true } : destination
    );
    setDestinationList(updatedDestinations);
  };

  return (
    <div className="App">
      {destinationList.map((destination, index) => (
        <DestinationBox
          key={index}
          destination={destination}
          markAsVisitied={markAsVisitied}
        />
      ))}
    </div>
  );
}

export default App;
