import React from "react";
import "./Header.css";

export default function Header(props) {
  let month, monthOut;
  let month1 = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre"
  ];
  let month2 = ["Octubre", "Noviembre", "Diciembre"];

  const frase = () => {
    if (props.checkIn[5] === "0") {
      month = month1[props.checkIn[6] - 1];
    } else {
      month = month2[props.checkIn[6] - 1];
    }
    if (props.checkOut[5] === "0") {
      monthOut = month1[props.checkOut[6] - 1];
    } else {
      monthOut = month2[props.checkOut[6] - 1];
    }
    let headerDate =
      "Del el " +
      props.checkIn[8] +
      props.checkIn[9] +
      " " +
      "de " +
      month +
      " " +
      "de " +
      props.checkIn[0] +
      props.checkIn[1] +
      props.checkIn[2] +
      props.checkIn[3] +
      " al " +
      props.checkOut[8] +
      props.checkOut[9] +
      " " +
      "de " +
      monthOut +
      " " +
      "de " +
      props.checkOut[0] +
      props.checkOut[1] +
      props.checkOut[2] +
      props.checkOut[3];

    return headerDate;
  };

  let date = frase();

  return (
    <div className="header">
      <h1 className="main-title"> Hoteles</h1>
      {props.checkIn === "dd/mm/yyyy" || props.checkOut === "dd/mm/yyyy" ? (
        <p className="checkin"> Lugares para hospedarte y Experiencias </p>
      ) : props.place === "todos" ? (
        <p className="checkin"> {date}</p>
      ) : (
        <p className="checkin">
          {" "}
          {date} en {props.place}
        </p>
      )}
    </div>
  );
}
