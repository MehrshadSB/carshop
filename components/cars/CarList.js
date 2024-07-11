import React from "react";
import Layout from "../layouts/layout";
import styles from "./carlist.module.css";
import Back from "../icons/Back";
import { useRouter } from "next/router";
import Cards from "../Modules/Cards";

function CarList({ data }) {
  const router = useRouter();

  const backHandler = () => {
    router.back();
  };
  
  return (
    <Layout>
      <div className={styles.back}>
        <button onClick={backHandler}>
          <Back />
          <p>Back</p>
        </button>
      </div>
      <div className={styles.cards}>
        {data.map((car) => (
          <Cards key={car.id} car={car} />
        ))}
      </div>
    </Layout>
  );
}

export default CarList;
