import Image from "next/image";
import Link from "next/link";
import SocialMedia from "../SocialMedia";

export default function Header() {
  return (
    <header
      className="sticky left-0 top-0 z-10 w-full bg-white shadow-xl transition duration-100 dark:bg-black"
    >
      {/* Barra superior */}
      <div className="flex flex-row items-center justify-around bg-blue-400 opacity-90 p-2.5">
        <div className="flex w-80 flex-row items-center justify-center gap-5 lg:w-96">
          <h4 className="text-white">Get your Cash Offer Today!</h4>
          <button className="hidden cursor-text items-center gap-2.5 rounded-full bg-black px-3 py-2 font-medium text-white md:inline-flex">
            <h4>+1 866 936-7735</h4>
          </button>
        </div>
      </div>

      {/* Sección principal con Grid */}
      <div
        className="relative mx-auto grid w-full grid-cols-2 items-center gap-4 px-4 py-5 
                   md:px-8"
      >
        {/* Columna 1: Logo */}
        <div className="flex items-center gap-10">
          <Link href="/" className="-ml-5 md:ml-0">
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
          </Link>
        </div>

        {/* Columna 2: Redes Sociales */}
        <div className="flex justify-end">
          <SocialMedia />
        </div>
      </div>
    </header>
  );
}
