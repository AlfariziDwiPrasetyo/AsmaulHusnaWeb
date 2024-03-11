"use client";
import React from "react";
import CardSection from "./CardComponent";
import { AsmaulHusna } from "@/app/types";

interface SubMainSection {
  filteredData: AsmaulHusna[] | null;
}

const SubMainSection: React.FC<SubMainSection> = ({ filteredData }) => {
  return filteredData == null ? (
    "loading"
  ) : (
    <div className="flex mt-10 justify-center items-center w-full">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {filteredData?.map((asmaulHusna) => (
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

export default SubMainSection;
