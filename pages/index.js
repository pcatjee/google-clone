import Head from "next/head";
import { Inter } from "@next/font/google";
import Avatar from "../components/Avatar";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";
import { FaMicrophone } from "react-icons/fa";
import Footer from "../components/Footer";
import { TbGridDots } from "react-icons/tb";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left */}

        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <TbGridDots className="w-10 h-10 p-2  hover:bg-gray-100 rounded-full cursor-pointer" />
          {/* Avatar */}
          <Avatar url="https://media.licdn.com/dms/image/C4D03AQFAd9-8dQvRsA/profile-displayphoto-shrink_200_200/0/1659515035599?e=1677715200&v=beta&t=m8y5Hwhw_ytr9udh12c82NaNLn1M4W-yXgKA_gBUoDk" />
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          loading="lazy"
          src="https://i.imgur.com/FVp3jWG.png"
          width={300}
          height={100}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <BsSearch className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          ></input>
          <FaMicrophone className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0  sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={search} className="btn">
            I'm Feeling Lucky
          </button>
        </div>
      </form>
      {/* Footer */}
      <Footer />
    </div>
  );
}
