import React from "react"
import Movie from "./Movie"

const ListOfMovies = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          {props.movies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                image={movie.poster_path}
                viewDescription={props.viewDescription}
                idMovie={movie.id}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ListOfMovies
