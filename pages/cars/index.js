import styles from "@/styles/cars.module.css";
import Category from "@/components/Categorys/category";
import Cards from "@/components/Modules/Cards";
import { carsData } from "@/data/carsData";
import { useRouter } from "next/router";
import { useState } from "react";

function index() {
  const router = useRouter();
  const [lowPrice, setLowPrice] = useState();
  const [highPrice, setHighPrice] = useState();
  console.log(lowPrice, highPrice);
  const filterHandler = () => {
    router.push(`/filter/${lowPrice}/${highPrice}`);
  };

  return (
    <div className={styles.main}>
      <div className={styles.product}>
        {carsData.map((car) => (
          <Cards key={car.id} car={car} />
        ))}
      </div>
      <div className={styles.side}>
        <div className={styles.form}>
          <input
            type="text"
            placeholder="Min Price"
            value={lowPrice}
            onChange={(e) => setLowPrice(e.target.value)}
          />
          <input
            type="text"
            placeholder="Max Price"
            value={highPrice}
            onChange={(e) => setHighPrice(e.target.value)}
          />
          <button onClick={filterHandler}>Submit</button>
        </div>
        <div className={styles.category}>
          <Category />
        </div>
      </div>
    </div>
  );
}

export default index;
