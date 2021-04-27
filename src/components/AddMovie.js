import React, { useState, useContext } from 'react'
import { MovieContext } from '../context'

const AddMovie = () => {

    const [Movies, setMovies] = useContext(MovieContext);

    const [formdata, setFormdata] = useState({
        name: '',
        price: '',
        id: 1354
    });

    const submitHandler = e => {
        e.preventDefault();
        setMovies([
            ...Movies,
            formdata
        ]);
        setFormdata({
            name: '',
            price: '',
            id: 1354
        });
    } 
    
    return (
        <form onSubmit={submitHandler}>
            <input type="text" name="name" placeholder="name" value={formdata.name} onChange={e => setFormdata({...formdata, name: e.target.value})}></input>
            <input type="text" name="price" placeholder="price" value={formdata.price} onChange={e => setFormdata({...formdata, price: e.target.value})}></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddMovie