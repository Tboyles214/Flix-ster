import MovieImage from "@/components/MovieImage";
import Image from "next/image";

async function movieDetails({ searchParams }: { searchParams: string }) {
  const API_KEY = process.env.API_KEY;

  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${API_KEY}&i=${searchParams.movie}`
  );

  const movie = await res.json();
  console.log(movie);
  
    const full = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${movie.title}&plot=full`);
    const fullMovie = await full.json();
    console.log(fullMovie);
    
      return (
        <div className="max-w-5xl mx-auto md:flex sm:max-md:flex-col gap-8 mt-80 mr-40">
          <div className="md:w-1/4">
            
            <MovieImage src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="md:w-1/2 md:pl-8 mt-10 md:mt-0">
            <h3 className="mt-4 text-3xl font-semibold">{movie.Title}</h3>
            <div className="flex mt-2">
              <p className="mr-4 text-lg text-gray-500">{movie.Year}</p>
              <p className="mr-4 text-lg text-gray-500">{movie.Rated}</p>
              <p className="mr-4 text-lg text-gray-500">{movie.Runtime}</p>
            </div>
            <p className="mt-2 text-lg text-gray-500">{movie.Genre}</p>
            <div className="mt-4">
              <p className="">{fullMovie.Plot}</p>
            </div>
          </div>
        </div>
      );
    };
export default movieDetails;
