"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type } from "os";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

type Props = {
  movie: Movie;
};

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    const encodedSearchTerm = encodeURIComponent(searchTerm);

    console.log(searchTerm);
  };

  return (
    <div className="col-start-5 col-span-2 flex items-center mx-auto mb-5 justify-center mt-12 md:mt-20  ">
      <form onSubmit={onSearch}>
        <div className="flex rounded-full bg-white p-2 mx-auto overflow-hidden">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            className="w-70  px-6 outline-none "
            placeholder="Search..."
          />
          <Link
            onSubmit={onSearch}
            href={{
              pathname: "/search",
              query: { searchTerm: searchTerm },
            }}
          >
            <button
              
              className="p-4 py-4 mt-1 bg-blue-500 hover:bg-blue-700 text-white rounded-full h-full"
            >
              <FaSearch />
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Search;
