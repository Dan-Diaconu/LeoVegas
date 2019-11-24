import React from "react"
import DefaultImage from "../assets/default-image.jpg"
import YouTube from "react-youtube"

const divStyle = {
  margin: "10px",
  float: "right"
}

const opts = {
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
}

const MovieDescription = (props) => {
  return (
    <div className="container">
      <div
        className="row"
        onClick={props.closeDescription}
        style={{ cursor: "pointer", paddingTop: 50 }}
      >
        <div className="icon-preview col s6 m3">
          <i className="material-icons dp48">arrow_back</i>
          <span> Go Back </span>
        </div>
      </div>
      <div className="row">
        <div className="col s14 m4">
          {props.currentMovie.poster_path == null ? (
            <img
              src={DefaultImage}
              alt="poster"
              style={{ width: 180, height: "100%" }}
            />
          ) : (
            <img
              src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`}
              alt="poster"
              style={{ width: 180, height: "100%" }}
            />
          )}
        </div>

        <div className="col s12 m8">
          <div className="info-container">
            <h6>
              {props.currentMovie.title}{" "}
              {props.currentMovie.original_title !== props.currentMovie.title ? (
                <p className="subTitle"> ({props.currentMovie.original_title})</p>
              ) : (
                ""
              )}{" "}
            </h6>
            <div>{props.currentMovie.overview}</div>
            <div style={{ padding: 10 }}>
              <span>
                <b>Vote:</b> {props.currentMovie.vote_count}{" "}
              </span>
              <span>
                <b>Popularity:</b> {props.currentMovie.popularity}{" "}
              </span>
              <span>
                <b>Release:</b>{" "}
                {props.currentMovie.release_date
                  .substring(5)
                  .split("-")
                  .concat(props.currentMovie.release_date.substring(0, 4))
                  .join("/")}{" "}
              </span>
            </div>
            <div style={divStyle}>
              <a
                href="/#"
                className="waves-effect waves-light btn"
                onClick={props.handleFavorites.bind(
                  this,
                  props.currentMovie.id,
                  props.currentMovie
                )}
              >
                <i className="material-icons left">favorite</i>+ Favorite
              </a>
              <a
                href="/#"
                className="waves-effect waves-light btn"
                onClick={props.handleViews.bind(
                  this,
                  props.currentMovie.id,
                  props.currentMovie
                )}
              >
                <i className="material-icons right">add_to_queue</i>View Later
              </a>
            </div>

            {props.youtubeLink !== "" ? (
              <div>
                <div
                  className="video"
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%" /* 16:9 */,
                    paddingTop: 25,
                    height: 0
                  }}
                >
                  {/*
                  <iframe
                    title='video'
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%"
                    }}
                    src={`https://www.youtube.com/embed/${props.youtubeLink}`}
                    frameBorder="0"
                    allowfullscreen="allowfullscreen"
                    mozallowfullscreen="mozallowfullscreen" 
                    msallowfullscreen="msallowfullscreen" 
                    oallowfullscreen="oallowfullscreen" 
                    webkitallowfullscreen="webkitallowfullscreen"                    
                  />
                  */}
                  <YouTube videoId={props.youtubeLink} opts={opts} />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDescription
