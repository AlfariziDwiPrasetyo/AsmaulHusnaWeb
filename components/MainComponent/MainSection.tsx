"use client";
import React, { useEffect, useRef, useState } from "react";
import SubMainSection from "./SubMainSection";
import data from "../../app/action";
import { AsmaulHusna } from "@/app/types";
import FooterSection from "../FooterComponent/FooterSection";

function MainSection() {
  const [rawData, setRawData] = useState<AsmaulHusna[] | null>(null);
  const [filteredData, setFilteredData] = useState<AsmaulHusna[] | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  console.log(inputValue);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    const getData = async () => {
      try {
        const response = await data();
        setFilteredData(response);
        setRawData(response);
      } catch (error: any) {
        console.log(error.message);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const filterData = () => {
      const lowerCaseInput = inputValue.toLowerCase();
      const currentFilteredData = rawData;
      if (currentFilteredData) {
        const filtered = rawData.filter((item) => {
          return (
            item.latin.toLowerCase().includes(lowerCaseInput) ||
            item.arab.includes(lowerCaseInput) ||
            item.arti.toLowerCase().includes(lowerCaseInput)
          );
        });
        setFilteredData(filtered);
      }
    };
    filterData();
  }, [inputValue]);

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.altKey) {
      e.preventDefault();
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  return (
    <>
      <section>
        <div className="max-w-full flex justify-center items-center">
          <div className="w-6/12">
            <label className="input input-bordered flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="grow"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <div className="text-center p-2">
              <kbd className="kbd kbd-xs">ctrl</kbd>+
              <kbd className="kbd kbd-xs">alt</kbd>
            </div>
          </div>
        </div>
      </section>
      <SubMainSection filteredData={filteredData} />
      <FooterSection />
    </>
  );
}

export default MainSection;
