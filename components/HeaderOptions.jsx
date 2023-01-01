import React from "react";
import HeaderOption from "./HeaderOption";
import { BsSearch } from "react-icons/bs";
import { IoImageSharp } from "react-icons/io5";
import { RiVideoLine } from "react-icons/ri";

import { BiNews } from "react-icons/bi";
import { SiGooglemaps } from "react-icons/si";
import { AiOutlineMore } from "react-icons/ai";

const HeaderOptions = () => {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
      {/* Left  */}
      <div className="flex space-x-6">
        <HeaderOption Icon={BsSearch} title="All" />
        <HeaderOption Icon={IoImageSharp} title="Images" />
        <HeaderOption Icon={RiVideoLine} title="Videos" />
        <HeaderOption Icon={BiNews} title="News" />
        <HeaderOption Icon={SiGooglemaps} title="Maps" />
        <HeaderOption Icon={AiOutlineMore} title="More" />
      </div>
      {/* Right  */}
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
};

export default HeaderOptions;
