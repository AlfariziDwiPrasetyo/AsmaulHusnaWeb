import React from "react";
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <div className="max-w-full min-h-screen w-full flex justify-center items-center">
      <section className="max-w-xl flex flex-col justify-center items-center p-4">
        <h1 className="poppins text-center text-4xl font-semibold flex items-center justify-center">
          Asmaul Husna
        </h1>
        <p className="poppins font-base text-sm text-center leading-6">
          99 nama Allah yang indah dan mulia dalam Islam
        </p>
        <div className={styles["scroll-downs"]}>
          <div className={styles.mousey}>
            <div className={styles.scroller}></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
