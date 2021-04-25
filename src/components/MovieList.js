import React, { useContext } from 'react';
import Movie from './Movie';
import { MovieContext } from "../context";

const MovieList = () => {

    const [movies, setMovies] = useContext(MovieContext);
    
    return (
        <div>
            {movies.map(movie => (
                <Movie data={movie} />
            ))}
        </div>
    );

};

export default MovieList;