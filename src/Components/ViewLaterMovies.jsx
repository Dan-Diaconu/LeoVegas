import React from "react"

const ViewLaterMovies = (props) => {
  return (
    <div className="container">
      <div
        className="row"
        onClick={props.closeLater}
        style={{ cursor: "pointer", paddingTop: 50 }}
      >
        <div className="icon-preview col s6 m3">
          <i className="material-icons dp48">arrow_back</i>
          <span> Go Back </span>
        </div>
      </div>

      <div className="row">
        <div className="col s12 m12">
          <div className="divider"></div>

          {Object.keys(props.records).length > 0 ? (
            <h5 className="header">View Later</h5>
          ) : (
            ""
          )}

          {props.records.map((movie) => {
            return (
              <div key={movie.id}>
                <div className="collection">
                  <a
                    href="/#"
                    className="collection-item"
                    onClick={() => props.viewDescription(movie.id)}
                  >
                    <span className="new badge">
                      Vote: {movie.vote_count} Popularity: {movie.popularity}{" "}
                    </span>
                    <h6>{movie.title}</h6>{" "}
                    {movie.original_title !== movie.title ? (
                      <p className="subTitle"> ({movie.original_title})</p>
                    ) : (
                      ""
                    )}
                    <span style={{ color: "black" }}> {movie.overview}</span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ViewLaterMovies
