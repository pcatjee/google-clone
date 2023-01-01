import React from "react";

const Footer = () => {
  return (
    <footer className=" w-screen bg-gray-100 text-gray-500">
      <div className=" flex py-[15px] px-[15px] md:px-[30px] border-b border-[#dadce0] ">
        <p className=" text-[15px] leading-none">India</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between py-3 md:py-0 md:px-[15px] border-b border-[#dadce0]">
        <div className="flex justify-center ">
          <p className="para">Advertising</p>
          <p className="para">Business</p>
          <p className="para">How Search works</p>
        </div>

        <div className="flex justify-center">
          <p className="para">Privacy</p>
          <p className="para">Terms</p>
          <p className="para">Settings</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
