import React, { useEffect, useState } from "react"
import YouTube from 'react-youtube'
import axios from "../../axios"
import {API_KEY, IMG_URL } from "../../constants"
import "./RowPost.css"

const RowPost = (props) => {
    const [movies, setMovies] = useState([])
    const [urlId,setUrlId] = useState('')

    useEffect(() => {
        axios.get(props.url).then((response) => {
            if (response.data.results !== 0) {
                setMovies(response.data.results)
            }
        })
    }, [])
    
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
    };
    
    const handleMovieTrailer = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            setUrlId(response.data.results[0])
        })
    }
    return (
        <div className="row">
            <h2 >{ props.title}</h2>
            <div className="posters">
                {movies.map((movie) =>
                    <img onClick={()=>handleMovieTrailer(movie.id)} className={props.isSmall ? "small_poster" : "poster"} src={IMG_URL+movie?.backdrop_path} alt="" />
                )}
            </div>
            {urlId && <YouTube videoId={urlId?.key} opts={opts} /> }
            
        </div>
    )
}

export default RowPost