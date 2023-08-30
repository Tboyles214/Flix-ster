import Link from 'next/link';
import React from 'react';
import MovieImage from './MovieImage'; // Import the MovieImage component

type MovieProps = {
  movie: any;
};

const Movie: React.FC<MovieProps> = ({ movie }) => {
  return (
    <Link
      href={{
        pathname: '/movie',
        query: { movie: movie.imdbID },
      }}
    >
      <div className='relative w-7/12 sm:w-70 h-80 hover:scale-110'>
        {/* Use the MovieImage component */}
        <MovieImage src={movie.Poster} alt={movie.Title} />
      </div>
      <h3 className='mt-4 text-xl font-semibold'>{movie.Title}</h3>
      <p className='mt-1 text-lg text-gray-500'>{movie.Year}</p>
    </Link>
  );
};

export default Movie;


