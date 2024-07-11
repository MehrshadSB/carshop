import React from "react";
import styles from "@/components/layouts/layout.module.css";
import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>Mehrshad Sport</h2>
          <p>Choose and Buy your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a target="_blank">
          Mehrshad
        </a>{" "}
        Next.js courses | Mehrshad Project &copy;
      </footer>
    </>
  );
}

export default Layout;
