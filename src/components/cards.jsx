import React from "react";

// Sid: Importing Icons
import { IoMdPause } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
// Sid: Importing Icons

// !Global Icons Size
const ICON_SIZE = 30;

const cards = () => {
  return (
    <div className="card-content flex flex-col h-full">
      <div className="cards-wrapper flex gap-10 h-full p-10 ">
        <div
          className="card1 w-full gray-round
          flex flex-col justify-center items-center gap-5
        "
        >
          <div className="text-area ">
            <p className="title text-[1.5rem] font-semibold">
              Color Palette Selection{" "}
            </p>
            <p
              className="sub-title 
              text-[1rem] text-opacity-90
              text-gray-300"
            >
              Transient Xero
            </p>
          </div>

          <div className="play-btn ">
            <IoMdPause size={ICON_SIZE} />
          </div>

          <div className="timer flex gap-[5rem] ">
            <div className="today-timer timer-text ">
              <p className="sub-text ">Today</p>
              <p className="today-text ">00:19:06</p>
            </div>
            <div className="limit-timer timer-text ">
              <p className="sub-text ">Limit</p>
              <p className="limit-text ">19:00:00</p>
            </div>
          </div>
        </div>
        <div className="card2 w-full gray-round">
          <div className="heading flex  justify-between  items-center">
            <p className="task-text">Today's tasks</p>
            <div className="manage-wrapper flex items-center">
              <p className="manage-text">Manage</p>
              <MdNavigateNext size={20} />
            </div>
          </div>
          <div className="tasks flex  justify-center items-center"> 
            <div className="task flex justify-around items-center w-full">
              <div className="pause  flex  justify-center items-center">
              <IoMdPause size={15} />
              </div>
              <div className="content">
                <p className="content-title">Color Palette Selection</p>
              </div>
            </div>
          </div>
          
        </div>
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
