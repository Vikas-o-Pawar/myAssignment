import React, { useEffect, useState } from 'react'
import MovieCard from './UI/HomeUI/MovieCard';
import classes from './HomePage.module.css';

export default function HomePage() {
    const [data, setData] = useState([]);

    const getMoviehandler = async () => {
        const url = `https://api.tvmaze.com/search/shows?q=all`
        const response = await fetch(url);
        const resJson = await response.json();

        setData(resJson)
    }

    useEffect(() => {
        getMoviehandler();
    }, [])

    return (
        <section className={classes.mainSecDiv}>
            <div className={classes.homePageDiv}>
                {data.map((d) => {
                    return <MovieCard movieName={d.show.name} movieImg={d.show.image.medium} lang={d.show.language} genre={d.show.genres[0]} rating={d.show.rating.average} id={d.show.id} key={Math.random()} />
                })}
            </div>
        </section>

    )
}
