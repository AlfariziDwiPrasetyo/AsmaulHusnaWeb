"use client";
import React, { useEffect, useState } from "react";
import data from "../../app/action";
import CardSection from "./CardComponent";

const MainSection = () => {
  type asmaulHusna = {
    urutan: number;
    latin: string;
    arab: string;
    arti: string;
  };

  const [dataAH, setDataAH] = useState<asmaulHusna[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await data();
        setDataAH(response);
      } catch (error: any) {
        console.log(error.message);
      }
    };
    getData();
  }, []);

  return dataAH == null ? (
    "loading"
  ) : (
    <div className="flex mt-10 justify-center items-center w-full">
      <div className="grid grid-cols-3 gap-4">
        {dataAH.map((asmaulHusna) => (
          <CardSection
            key={asmaulHusna.urutan}
            latin={asmaulHusna.latin}
            arab={asmaulHusna.arab}
            arti={asmaulHusna.arti}
          />
        ))}
      </div>
    </div>
  );
};

export default MainSection;
