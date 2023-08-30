import Movie from "@/components/Movie";

export default async function Home() {
  const API_KEY = process.env.API_KEY;

  const trending = [
    "tt15398776",
    "tt9362930",
    "tt1517268",
    "tt14998742",
    "tt13603966",
    "tt10172266",
  ];
  const trendingMovies = await Promise.all(
    trending.map(async (id) => {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
      );
      const movie = await res.json();
      return movie;
    })
  );
  console.log(trendingMovies);

  return (
    <main className=" pt-40 mx-auto px-8 xl:px-0 mt-60">
      <section className="flex flex-col space-y-12 pb-44">
        <h1 className="text-5xl font-bold text-center text-black">
          Trending Movies
        </h1>
        <div className=" mx-3 grid grid-cols-1 gap-y-10 gap-x-6 ml-32 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {trendingMovies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}
