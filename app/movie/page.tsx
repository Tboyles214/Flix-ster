import MovieImage from "@/components/MovieImage";

async function movieDetails({ searchParams }: { searchParams: any }) {
  const API_KEY = process.env.API_KEY;

  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${API_KEY}&i=${searchParams.movie}`
  );

  const movie = await res.json();

  const full = await fetch(
    `http://www.omdbapi.com/?apikey=${API_KEY}&t=${movie.title}&plot=full`
  );
  const fullMovie = await full.json();

  return (
    <div className="flex justify-center mx-auto xlg:flex-wrap gap-8  mt-80 mr-40">
      <div className="md:w-80 md:h-auto">
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
}
export default movieDetails;
