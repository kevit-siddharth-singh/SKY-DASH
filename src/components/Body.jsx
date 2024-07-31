import React from "react";
import Cards from "./cards";
const Body = () => {
  return (
    <>
      <div className="mt-[1px] main-body grid grid-cols-5 grid-rows-2 h-[91.7%] gap-[1px] ">
        <div className="cards-wrapper black text-center col-span-4 ">
          <Cards />
        </div>
        <div className="quick-access text-center  row-span-4">Quick Access</div>
        <div className="projects text-center grid-cols-5 ">Projects</div>
      </div>
    </>
  );
};

export default Body;
