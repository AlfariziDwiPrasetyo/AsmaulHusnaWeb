"use client";
import React, { useEffect, useRef, useState } from "react";

function SearchSection() {
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
  }, []);

  const handleKeyPress = (e: KeyboardEvent) => {
    if ((e.ctrlKey && e.key == "K") || e.key == "k") {
      e.preventDefault();
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  return (
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
            <kbd className="kbd kbd-xs">k</kbd>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchSection;
