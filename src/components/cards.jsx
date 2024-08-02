import React from "react";

const cards = () => {
  return (
    <div className="card-content flex flex-col h-full">
      <div className="cards-wrapper flex gap-10 h-full p-10 ">
        <div className="card1 w-full gray-round">hey</div>
        <div className="card2 w-full gray-round">hey</div>
        <div className="card3 w-full gray-round">hey</div>
      </div>

    <div className="card-footer flex justify-between">
        <div className="footer-data-1">
            <p>Projects</p>
            <div className="filter">
                <p>Filter</p>
            </div>
        </div>
        <div className="footer-data-2 flex">
            <p className="Today">Today</p>
            <p className="Week">Week</p>
            <p className="Month">Month</p>
            <p className="Year">Year</p>

        </div>
    </div>
    </div>
  );
};

export default cards;
