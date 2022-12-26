import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      {/* top div */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* search bar */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2 flex-grow h-full flex-shrink rounded-l-md  w-6 focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        <div className="text-white flex items-center text-xs space-x-6 mx-6">
          <div className=" link">
            <p>hello matheus alexandre</p>
            <p className="font-extrabold md:text-sm">Account & List</p>
          </div>
          <div className=" link">
            <p>reuturn</p>
            <p className="font-extrabold md:text-sm">& orders</p>
          </div>
          <div className=" relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full font-bold text-black">
              0
            </span>
            <ShoppingCartIcon className="h-10 " />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* botton div */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">prime video</p>
        <p className="link">Amazon business</p>
        <p className="link">Today deals</p>
        <p className="link hidden lg:inline-flex">eletronics</p>
        <p className="link hidden lg:inline-flex">eletronics</p>
        <p className="link hidden lg:inline-flex">eletronics</p>
        <p className="link hidden lg:inline-flex">eletronics</p>
      </div>
    </header>
  );
}

export default Header;
