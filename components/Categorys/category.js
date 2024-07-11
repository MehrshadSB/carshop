import Link from "next/link";
import React from "react";
import Sedan from "../icons/Sedan";

import styles from "../Categorys/category.module.css";
import Suv from "../icons/Suv";
import Hatchback from "../icons/Hatchback";
import Sport from "../icons/Sport";

function Category() {
  return (
    <>
      <p className={styles.title}>Category</p>
      <div className={styles.container}>
        <div>
          <Link href="/category/sedan">
            <Sedan />
            <p>sedan</p>
          </Link>
        </div>
        <div>
          <Link href="/category/suv">
            <Suv />
            <p>SUV</p>
          </Link>
        </div>
        <div>
          <Link href="/category/hatchback">
            <Hatchback />
            <p>Hatchback</p>
          </Link>
        </div>
        <div>
          <Link href="/category/sport">
            <Sport />
            <p>Sport</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Category;
