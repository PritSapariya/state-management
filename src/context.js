import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {

    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 321231
        },
        {
            name: 'Avtar',
            price: '$8',
            id: 691531
        },
        {
            name: 'Inception',
            price: '$12',
            id: 696548
        }
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]} >
            {props.children}
        </MovieContext.Provider>
    );
}