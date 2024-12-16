"use client";
import Image from "next/image";
import { useState } from "react";

export type Menu = {
    title: string;
    path?: string;
  };
  

const menuData : Menu[] = [

  // {
  //   title: "House Conditions",
  //   path: "https://www.singlefamilyservices.com/#conditions",
  // },
  // {
  //   title: "Contact",
  //   path: "https://www.singlefamilyservices.com/#support",
  // },
]

export default function Header(){
  const [navigationOpen, setNavigationOpen] = useState(false);

  return (
    <header
      className={`sticky left-0 top-0 z-2 w-full bg-white shadow-xl transition duration-100 dark:bg-black`}
    >
      <div className="flex flex-row justify-around items-center bg-blue-400 opacity-90 p-2.5">
        <div className="w-80 lg:w-96 flex flex-row justify-center items-center gap-5">
          <h4 className="text-white">Get your Cash Offer Today!</h4>
          <button className="hidden md:inline-flex items-center gap-2.5 rounded-full px-3 py-2 font-medium bg-black text-white cursor-text">
            <h4>+1 866 936-7735</h4>
          </button>
        </div>
      </div>
      <div className="relative mx-auto w-full items-center justify-between px-4 py-5 md:px-8 xl:flex ">
        <div className="flex w-full items-center justify-center gap-10 xl:w-2/5">
          <a href="/" className="-ml-5 md:ml-0">
            <Image
              src="/logo.png"
              alt="logo"
              width={410}
              height={110}
              className="hidden w-full dark:block"
            />
            <Image
              src="/logo.png"
              alt="logo"
              width={410}
              height={110}
              className="w-full dark:hidden"
            />
          </a>

          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-6 w-6 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-300" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "delay-400 !w-full" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-500" : "w-0"
                  }`}
                ></span>
              </span>
              <span className=" absolute right-0 block h-full w-full rotate-45">
                <span
                  className={`absolute left-[11px] top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!h-0 delay-[0]" : "h-full"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-[11px] block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!h-0 delay-200" : "h-0.5"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>
        {/* Nav Menu Start */}
        <div
          className={`invisible h-0 w-full items-center justify-end xl:visible xl:flex xl:h-auto xl:w-full ${
            navigationOpen &&
            "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-4 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
          }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {menuData.map((menuItem,index) => (
                <li key={index}>
                  <a href={menuItem.path}>
                       {menuItem.title}
                  </a>
               
                </li>
              ))}
              <li>
                <a href="https://www.singlefamilyservices.com/#support">
                  <button className="bg-green-600 text-white font-semibold rounded-xl p-3.5">
                    Sell Your House
                  </button>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};


