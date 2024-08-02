import React from "react";

import { IoNotificationsOutline } from "react-icons/io5";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import user from "../assets/siddharth.jpeg";
import Body from "../components/Body";
import SideBar from "../components/SideBar";

// Sid: NAVBAR ICON SIZE
const ICON_SIZE = 25;
// Sid: NAVBAR ICON SIZE

const MainLayout = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="main-layout-wrapper flex gap-[1px] h-[100%] w-[100%] ">
      {/* Note: SideBar -- Component  */}
      <SideBar />
      {/* Note: SideBar -- Component  */}

      <div className="main-page w-[100%] ">
        <div className="navbar black py-[1rem] px-[1rem] flex items-center justify-between ">
          <div className="title ml-5">
            <p className="tracking-[0.6rem] text-[2rem] font-bold ">SKY DASH</p>
          </div>
          <div className="header-btn flex items-center justify-between  sm:gap-4">
            <div className="theme-toggle bg-[#2b2b2b] round  flex justify-center">
              <DarkModeSwitch
                style={{ color: "white" }}
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={ICON_SIZE}
              />
            </div>
            <div className="notification bg-[#2b2b2b] round">
              <IoNotificationsOutline size={ICON_SIZE} />
            </div>
            <div className={`user-icon round user  `}>
              <img src={user} alt="user-img" />
            </div>
          </div>
        </div>

        {/* Note  : Body Starts Here */}
        <Body />
        {/* Note  : Body Ends Here */}
      </div>
    </div>
  );
};

export default MainLayout;
