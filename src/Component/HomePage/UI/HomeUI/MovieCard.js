import React, { useCallback, useContext } from 'react'
import classes from './MovieCard.module.css'
import {Link} from 'react-router-dom'
import movieContext from '../../../../Context/MovieContext';

export default function TeaReviewCard(props) {
    const context = useContext(movieContext);

    function watchBtnHanlder() {
        context.id = props.id;
    }

    return (
        <section className={classes.mainMovieCardSec}>
            <div className={classes["card-mainDiv"]}>
                <img src={props.movieImg} alt="movie image" className='movieImg' />

                <div className={classes.movieCardDetails}>
                    <p><b> Name:</b>  {props.movieName}</p>
                    <p><b>Language:</b> {props.lang}</p>
                    <p><b>Genre:</b>  {props.genre}</p>
                    <p><b>Rating:</b> {props.rating}</p>
                    <button onClick={watchBtnHanlder}><Link to='/bookShow'>watch</Link> </button>
                </div>
            </div>
        </section>
    )
}