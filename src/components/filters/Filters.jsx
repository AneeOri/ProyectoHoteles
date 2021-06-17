import React from "react";
import "./Filters.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faSignOutAlt,
  faGlobeAmericas,
  faMoneyBillWave,
  faBed,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
export default function Filters(props) {
  let currentBefore = new Date(); // current.getTime()
  //let followingDay = new Date(currentBefore.getTime() + 86400000); // + 1 day in ms
  let current = currentBefore.toLocaleDateString().split();
  let currentStick =
    current[0][5] +
    current[0][6] +
    current[0][7] +
    current[0][8] +
    "-0" +
    current[0][3] +
    "-" +
    current[0][0] +
    current[0][1];
  let onChangeCheckIn = (event) => {
    props.setCheckIn(event.target.value);
  };
  let onChangeCheckOut = (event) => {
    props.setCheckOut(event.target.value);
  };
  let onChangeCountry = (event) => {
    props.setPlace(event.target.value);
  };
  let onChangePrice = (event) => {
    props.setPrice(event.target.value);
  };
  let onChangeRoom = (event) => {
    props.setRooms(event.target.value);
  };
  const reset = () => {
    props.setCheckIn("dd/mm/yyyy");
    props.setCheckOut("dd/mm/yyyy");
    props.setPlace("todos");
    props.setPrice("cualquiera");
    props.setRooms("cualquiera");
  };
  return (
    <div className="filter-container">
      <div className="inputContainer">
        <FontAwesomeIcon id="fontIcon" icon={faSignInAlt} />
        <input
          type="date"
          value={props.checkIn}
          min={currentStick}
          id="fill"
          onChange={onChangeCheckIn}
        ></input>
      </div>
      <div className="inputContainer">
        <FontAwesomeIcon id="fontIcon" icon={faSignOutAlt} />
        <input
          type="date"
          value={props.checkOut}
          id="fill"
          min={props.checkIn}
          onChange={onChangeCheckOut}
        ></input>
      </div>
      <div className="selectContainer">
        <FontAwesomeIcon id="fontIcon" icon={faGlobeAmericas} />
        <select
          name="select-country"
          value={props.place}
          id="fill"
          onChange={onChangeCountry}
        >
          <option value="todos">Todos los paises</option>
          <option value="Uruguay">Uruguay</option>
          <option value="Argentina">Argentina</option>
          <option value="Brasil">Brasil</option>
          <option value="Chile">Chile</option>
        </select>
      </div>
      <div className="selectContainer">
        <FontAwesomeIcon id="fontIcon" icon={faMoneyBillWave} />
        <select
          name="select-price"
          value={props.price}
          id="fill"
          onChange={onChangePrice}
        >
          <option value="cualquiera">Cualquier Precio</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
        </select>
      </div>
      <div className="selectContainer">
        <FontAwesomeIcon id="fontIcon" icon={faBed} />
        <select
          name="select-room"
          value={props.rooms}
          id="fill"
          onChange={onChangeRoom}
        >
          <option value="cualquiera">Cualquier Tamaño</option>
          <option value="small">Hotel Pequeño</option>
          <option value="medium">Hotel Mediano</option>
          <option value="large">Hotel Grande</option>
        </select>
      </div>
      <div className="selectContainerB">
        <FontAwesomeIcon id="fontIconB" icon={faTrash} />
        <button onClick={reset} className="resetButton">
          Limpiar
        </button>
      </div>
    </div>
  );
}
