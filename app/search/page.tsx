import Movie from "@/components/Movie";

async function SearchPage({ searchParams }: {
  searchParams: string;
  searchTerm: string;
  movie: any;
}) {
  const API_KEY = process.env.API_KEY;

  const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchParams.searchTerm}`);
  const response = await res.json();

  const searchMovies = response.Search || [];

  // Display only the first 6 movies
  const limitedSearchMovies = searchMovies.slice(0, 6);

  return (
    <main className="pt-40 mx-auto px-8 xl:px-0 my-40">
      <section className="flex flex-col space-y-11 pb-44">
        <h1 className="text-5xl font-bold text-center text-black">
          Search Results for "{searchParams.searchTerm}"
        </h1>
        <div className='mx-3 grid grid-cols-1 gap-y-10 gap-x-10 ml-32 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8'>
          {limitedSearchMovies.map((movie) => (
            <Movie key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default SearchPage;







