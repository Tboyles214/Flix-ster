import Link from "next/link";

import { BiCameraMovie } from "react-icons/bi";

import Search from "./Search";

function Header() {
  return (
    <header className="grid grid-cols-10 fixed top-0 w-full bg-gradient-to-r from-blue-500 via-purple-700 to-pink-300 z-50 shadow">
      <div className="col-start-1 col-span-2 flex items-center ml-4 mt-1">
        <Link href="/">
          <BiCameraMovie className="text-7xl text-white" />
        </Link>
      </div>

      <div className="col-start-5 col-span-2 flex flex-col mx-auto mt-1">
        <h1 className="text-6xl  text-center font-extrabold text-white whitespace-nowrap">
          Flix-ster
        </h1>
      <Search />
      </div>

    </header>
  );
}

export default Header;
