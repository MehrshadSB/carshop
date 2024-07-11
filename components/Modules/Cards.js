import React from "react";
import styles from "./cards.module.css";
import Location from "../icons/Location";

function Cards({ car }) {
  return (
    <div className={styles.container}>
      <img src={car.image} />
      <h4>{car.name}</h4>
      <p>
        {car.year} - {car.distance}Km
      </p>
      <div className={styles.details}>
        <div>
          <p>$ {car.price}</p>
        </div>
        <div className={styles.location}>
          <Location />
          <p>{car.location}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
