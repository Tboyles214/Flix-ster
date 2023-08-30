import Link from "next/link";
import Image from "next/image";
import { BiCameraMovie } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import Search from "./Search";

function Header() {
  return (
    <header className="grid grid-cols-10 fixed top-0 w-full bg-gradient-to-r from-blue-500 via-purple-700 to-pink-300 z-50 shadow">
      <div className="col-start-1 col-span-2 flex items-center ml-4 mt-1">
        <Link href="/">
          <BiCameraMovie className="text-7xl text-white" />
        </Link>
      </div>

      <div className="col-start-5 col-span-2 flex items-center ml-4 mt-1">
        <h1 className="text-6xl font-extrabold text-white whitespace-nowrap">
          Flix-ster
        </h1>
      </div>

      <Search />
    </header>
  );
}

export default Header;
