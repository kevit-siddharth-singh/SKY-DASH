import React from "react";

// Sid: Icons Import
import { SlGrid } from "react-icons/sl";
import { SiNintendogamecube } from "react-icons/si";
import { GrNotes } from "react-icons/gr";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { BsDashLg } from "react-icons/bs";
import { FiShare2 } from "react-icons/fi";
import { PiMicrophone } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdHeadsetMic } from "react-icons/md";
import { TbClockBolt } from "react-icons/tb";
import { AiOutlineMessage } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";
// Sid: Icons Import

const ICON_SIZE = 20;

const SideBar = () => {
  return (
    <>
      <div className="sidebar  black  flex flex-col justify-between">
        <div className="sidebar-item-1 flex flex-col p-[1rem] gap-2 items-center justify-center">
          <div className="logo  mb-5">
            <SiNintendogamecube size={35} />
          </div>
          <div className="sub-items-1 flex flex-col gap-3 items-center">
            <div className="sub-icons grid ">
              <SlGrid size={ICON_SIZE} />
            </div>
            <div className="sub-icons notes">
              <GrNotes size={ICON_SIZE} />
            </div>
            <div className="sub-icons calender">
              <IoCalendarNumberSharp size={ICON_SIZE} />
            </div>

            <div className="line">
              <BsDashLg size={30} />
            </div>
          </div>
          <div className="sub-items-2 flex flex-col gap-3 items-center">
            <div className="sub-icons share">
              <FiShare2 size={ICON_SIZE} />
            </div>
            <div className="sub-icons clock">
              <TbClockBolt size={ICON_SIZE} />
            </div>
            <div className="sub-icons message">
              <AiOutlineMessage size={ICON_SIZE} />
            </div>
          </div>
        </div>
        <div className="sidebar-item-2 flex flex-col p-[1rem] gap-3 justify-center items-center ">
          <div className={`sub-icons mic W-[${ICON_SIZE}]`}>
            <PiMicrophone size={ICON_SIZE} />
          </div>
          <div className="sub-icons settings">
            <IoSettingsOutline size={ICON_SIZE} />
          </div>
          <div className="sub-icons headphone">
            <MdHeadsetMic size={ICON_SIZE} />
          </div>
          <div className="line">
            <BsDashLg size={30} />
          </div>
          <div className="sub-icons logout">
            <LuLogOut size={ICON_SIZE} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
