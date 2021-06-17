import React from "react";
import { useState } from "react";
import "./styles.css";
import Header from "./components/header/Header";
import Filters from "./components/filters/Filters";
import Hotels from "./components/hotels/Hotels";

export default function App() {
  const [checkIn, setCheckIn] = useState("dd/mm/yyyy");
  const [checkOut, setCheckOut] = useState("dd/mm/yyyy");
  const [place, setPlace] = useState("todos");
  const [price, setPrice] = useState("cualquiera");
  const [rooms, setRooms] = useState("cualquiera");

  return (
    <div className="AppMainContainer">
      <Header
        checkIn={checkIn}
        setCheckIn={setCheckIn}
        checkOut={checkOut}
        setCheckOut={setCheckOut}
        place={place}
      />
      <Filters
        checkIn={checkIn}
        setCheckIn={setCheckIn}
        checkOut={checkOut}
        setCheckOut={setCheckOut}
        place={place}
        setPlace={setPlace}
        price={price}
        setPrice={setPrice}
        rooms={rooms}
        setRooms={setRooms}
      />
      <Hotels
        place={place}
        price={price}
        rooms={rooms}
        checkIn={checkIn}
        checkOut={checkOut}
      />
    </div>
  );
}
