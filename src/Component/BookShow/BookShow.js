import React, { useContext } from 'react'
import classes from './BookShow.module.css'
import { useState, useEffect } from 'react';
import movieContext from '../../Context/MovieContext';
import { Link } from 'react-router-dom';
export default function BookShow(props) {
    const [data, setData] = useState([]);
    const context = useContext(movieContext);
    const [userData, setUserData] = useState({
        // movieName: '',
        // userName: '',
    });

    const getMoviehandler = async () => {
        const url = `https://api.tvmaze.com/search/shows?q=all`
        const response = await fetch(url);
        const resJson = await response.json();

        setData(resJson);
    }

    const setLocalStorage = () => {
        const dataString = JSON.stringify(userData);
        localStorage.setItem('userData', dataString);
    };

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };
    useEffect(() => {
        getMoviehandler();
    }, []);

    const dataString = JSON.stringify(userData);
    localStorage.setItem('userData', dataString);

    const movie = data.find((d) => d.show.id === context.id);
    return (
        <div>
            {movie &&
                <section className={classes.mainMovieCardSec}>
                    <div className={classes["card-mainDiv"]}>
                        <img src={movie.show.image.medium} alt="movie image" className='movieImg' />

                        <div className={classes.movieCardDetails}>
                            <p><b> Name:</b>{movie.show.name} </p>
                            <p><b>Language:</b> {movie.show.language}</p>
                            <p><b>Genre:</b>{movie.show.genres}  </p>
                            <p><b>Rating:</b> {movie.show.rating.average}</p>
                            <p><b>Description</b> </p>
                            {movie.show.summary}
                        </div>
                    </div>
                </section>}

            <div className={classes.formSection}>
                <h1>Book Your Show!</h1>
                <form action="/">
                    <div className={classes.userNameAndAgeDiv}>
                        <input type="text" name="username" placeholder='Enter your name' onChange={handleChange} />
                        <input type="number" maxLength={100} name="userAge" placeholder='Enter your age' onChange={handleChange} />
                    </div>
                    <div className="userPhoneNumGmailDiv">
                        <input type="number" name="userPhoneNum" onChange={handleChange} placeholder='Enter your Phone number' />
                        <input type="text" name="userEmail" onChange={handleChange} placeholder='Enter your Email' />
                    </div>
                    <button onClick={setLocalStorage} type='submit'><Link to="/">Book Show</Link></button>
                </form>
            </div>

        </div>
    )
}
