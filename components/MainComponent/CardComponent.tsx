import React from "react";

interface CardSectionProps {
  latin: string;
  arab: string;
  arti: string;
}

const CardSection: React.FC<CardSectionProps> = ({ latin, arab, arti }) => {
  return (
    <div>
      <div
        className={`card w-72 ${
          latin.length > 30 ? "h-48" : "h-52"
        } bg-base-100 shadow poppins`}
      >
        <div className="card-body">
          <h1 className={`font-bold`}>{latin}</h1>
          <div className="card-actions justify-end">
            <h2 className="card-title text-2xl">{arab}</h2>
          </div>
          <p>{arti}</p>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
