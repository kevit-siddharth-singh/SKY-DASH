import React from "react";

import { IoIosNotifications } from "react-icons/io";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import user from "../assets/siddharth.jpeg";
import Body from "../components/Body";
import SideBar from "../components/SideBar";

const MainLayout = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="main-layout-wrapper flex gap-[1px] h-[100%] w-[100%] ">
      {/* Note: SideBar -- Component  */}
      <SideBar />
      {/* Note: SideBar -- Component  */}

      <div className="main-page w-[100%] ">
        <div className="navbar black py-[1rem] px-[1rem] flex items-center justify-between ">
          <div className="title">
            <p className="tracking-widest ">SKY DASH</p>
          </div>
          <div className="header-btn flex items-center justify-between  sm:gap-4">
            <div className="theme-toggle bg-[#3C3C3C] round  flex justify-center">
              <DarkModeSwitch
                style={{ color: "white" }}
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={18}
              />
            </div>
            <div className="notification bg-[#3C3C3C] round">
              <IoIosNotifications size={18} />
            </div>
            <div className="user-icon round user">
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
