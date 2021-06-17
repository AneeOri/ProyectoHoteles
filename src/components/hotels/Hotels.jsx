import React from "react";
import "./Hotels.css";
import { hotelsList } from "./Data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faBed,
  faDollarSign
} from "@fortawesome/free-solid-svg-icons";
export default function Hotels(props) {
  const filteredList = () => {
    let newHotelList = hotelsList
      .filter((card) => {
        if (props.checkIn === "dd/mm/yyyy" || props.checkOut === "dd/mm/yyyy") {
          return hotelsList;
        } else {
          let fromDate = new Date(props.checkIn);
          let toDate = new Date(props.checkOut);
          return (
            fromDate.getTime() >= card.availabilityFrom &&
            toDate.getTime() <= card.availabilityTo
          );
        }
      })
      .filter((card) => {
        if (props.place === "todos") {
          return hotelsList;
        }
        return card.country === props.place;
      })
      .filter((card) => {
        if (props.price === "cualquiera") {
          return hotelsList;
        }
        return card.price === parseInt(props.price, 10);
      })
      .filter((card) => {
        if (props.rooms === "cualquiera") {
          return hotelsList;
        }
        if (props.rooms === "small") {
          return card.rooms < 10;
        } else if (props.rooms === "medium") {
          return card.rooms >= 10 && card.rooms < 30;
        } else {
          return card.rooms >= 30 && card.rooms < 50;
        }
      });
    return newHotelList;
  };
  let hotelsFilter = filteredList();
  return (
    <div className="hotelCards">
      {hotelsFilter.length > 0 ? (
        hotelsFilter.map((card) => (
          <Card
            name={card.name}
            photo={card.photo}
            description={card.description}
            availabilityFrom={card.availabilityFrom}
            availabilityTo={card.availabilityTo}
            rooms={card.rooms}
            city={card.city}
            country={card.country}
            price={card.price}
          />
        ))
      ) : (
        <div>
          <div className="noResultImg"></div>
          <img
            className="imgResult"
            src="/sources/astronauta.png"
            alt="Imagen que muestra que no hay resultados"
          />
        </div>
      )}
    </div>
  );
}
function Card(props) {
  return (
    <div className="cards">
      <img src={props.photo} alt={props.name} className="imagen-card" />
      <h2 className="title">{props.name}</h2>
      <p className="info">{props.description}</p>
      <div className="general">
        <div className="location">
          <div className="icono-pin">
            <FontAwesomeIcon className="icono" icon={faMapMarkerAlt} />
          </div>
          <div className="locationText">
            <p className="country">
              {props.city}, {props.country}
            </p>
          </div>
        </div>
        <div className="room-price">
          <div className="rooms-info">
            <div className="icono-pin">
              <FontAwesomeIcon className="bed" icon={faBed} />
            </div>
            <div className="rooms">
              <p className="total-rooms">{props.rooms} Habitaciones</p>
            </div>
          </div>
          <div className="price">
            {[...Array(props.price)].map(() => (
              <FontAwesomeIcon className="icon-white" icon={faDollarSign} />
            ))}
            {[...Array(4 - props.price)].map(() => (
              <FontAwesomeIcon className="icon-gray" icon={faDollarSign} />
            ))}
          </div>
        </div>
      </div>
      <div className="cont-bookButton">
        <button className="bookButton">Reservar</button>
      </div>
    </div>
  );
}
