import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const router = useRouter();
  const searchInpuRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInpuRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          className="cursor-pointer"
          src="https://i.imgur.com/FVp3jWG.png"
          height={40}
          width={120}
          onClick={() => router.push("/")}
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            ref={searchInpuRef}
            className="flex-grow w-full focus:outline-none"
            type="text"
          />
          <IoMdClose
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInpuRef.current.value = "")}
          />
          <FaMicrophone className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-1 border-gray-300" />
          <BsSearch className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://media.licdn.com/dms/image/C4D03AQFAd9-8dQvRsA/profile-displayphoto-shrink_200_200/0/1659515035599?e=1677715200&v=beta&t=m8y5Hwhw_ytr9udh12c82NaNLn1M4W-yXgKA_gBUoDk"
        />
      </div>
      {/* Header options components  */}
      <HeaderOptions />
    </header>
  );
};

export default Header;
