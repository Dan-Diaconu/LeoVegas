import React, { Component } from "react"
import IconNo from "../assets/icon-adult.png"

var ddate

// import FlagIcon from './FlagIcon';
class Movies extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    /*

Read here:
        https://www.youtube.com/watch?v=bqSSLr8A8PU

// https://api.themoviedb.org/3/movie/75780/images?api_key=f7b7e6758aa4926f4eb468fe7bccc9f0
http://image.tmdb.org/t/p/w185/mt0ELw83HIRgaKaDzhsDcIi0RnW.jpg
Trailer:  http://api.themoviedb.org/3/movie/550/videos?f7b7e6758aa4926f4eb468fe7bccc9f0
https://api.themoviedb.org/3/movie/157336?api_key=f7b7e6758aa4926f4eb468fe7bccc9f0&append_to_response=videos   -> extract key 


// https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>&language=en-US


Movie Features
Search: Search for movies with a text query.

Discover: Search for movies based on data. Movies are queryable by fields like average rating, certifications, release dates and genres.
Find: Find movies based on an external ID like an IMDB ID.

Get details
    Primary info
    Alternative titles
    Cast
    Crew
    Images (posters, backdrops)
    Plot keywords
    Release information
    Trailers


* adult: false
* backdrop_path: "/uTu5sqOXPSIQ0WLedyHdr6l7F2D.jpg"
* genre_ids: (2) [18, 10749]
* id: 96724
original_language: "en"
original_title: "Anna Karenina"
overview: "Trapped in a loveless marriage, aristocrat Anna Karenina enters into a life-changing affair with the affluent Count Vronsky."
popularity: 11.135
poster_path: "/vueoajubjMMmDpcLOZnrU9wW95E.jpg"
release_date: "2012-09-06"
title: "Anna Karenina"
video: false
vote_average: 6.7
vote_count: 1383

*/
    if (this.props.movies !== null) {
      this.ddate = this.props.movies // conversie array
      console.log(this.ddate)

      return (
        <div className="row">
          {this.ddate.map((film) => (
            <div className="container" key={film.id}>
              <div className="left">
                {film.poster_path !== null ? (
                  <img
                    src={`http://image.tmdb.org/t/p/w185${film.poster_path}`}
                    alt="Poster"
                    className="imgm"
                  />
                ) : (
                  ""
                )}
              </div>

              <div className="right">
                <div>
                  {" "}
                  <div className="titlem">{film.title}</div>{" "}
                  {film.original_title !== film.title ? (
                    <span className="subTitle"> ({film.original_title})</span>
                  ) : (
                    ""
                  )}{" "}
                </div>

                <div className="descm">{film.overview.slice(0, 400) + "..."}</div>
                <span className="votem">
                  <b>Vote:</b>
                  {film.vote_count}{" "}
                </span>
                <span className="votem">
                  <b>Popularity:</b>
                  {film.popularity}{" "}
                </span>
                <span className="votem">
                  <b>Release:</b>
                  {film.release_date}{" "}
                </span>

                {film.adult ? (
                  <img
                    src={IconNo}
                    style={{ width: "32px", height: "32px" }}
                    alt="Logo"
                  />
                ) : (
                  ""
                )}
                <div className="descp">
                  <button
                    type="button"
                    className="btnM"
                    onClick={() => console.log(film.id, film)}
                  >
                    add Favorite
                  </button>
                  <button
                    type="button"
                    className="btnM"
                    onClick={() => console.log(film.id, film)}
                  >
                    add View later
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

export default Movies
