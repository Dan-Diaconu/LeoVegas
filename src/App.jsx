import React, { Component } from "react"
import "./App.css"
// import Movies from "./Components/Movies";
import Header from "./Components/Header"
import SearchBox from "./Components/Search"
import ListOfMovies from "./Components/ListOfMovies"
import MovieDescription from "./Components/MovieDescription"
import FavoriteMovies from "./Components/FavoriteMovies"
import ViewLaterMovies from "./Components/ViewLaterMovies"

const API_KEY = "f7b7e6758aa4926f4eb468fe7bccc9f0"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "", // &query=Jack+Reacher
      movies: [],
      genre: [], // http://api.themoviedb.org/3/genre/movie/list?api_key=####
      currentMovie: null,
      viewFav: null,
      viewLat: null,
      main: "M",
      youtubeLink: "",
      favorites: [],
      viewlater: []

      //     displayBody: false
    }

    this.API = API_KEY // process.env.API_KEY;
    this.BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${this.API}`

    this.BASE_URL_GENRE = `http://api.themoviedb.org/3/genre/movie/list?api_key=${this.API}`
    this.VIDEO_TRIAL_START = `http://api.themoviedb.org/3/movie/`
    this.VIDEO_TRIAL_STOP = `/videos?api_key=f7b7e6758aa4926f4eb468fe7bccc9f0`

    this.search = this.search.bind(this)

    /*
    fetch(BASE_URL_GENRE, {
      method: "GET"
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ genre: json }); // Load array Genre
      });
    console.log("genre ", this.state.genre);
    */
  }

  componentDidUpdate(prevProps, prevState) {
    //    console.log('AAAAAAAAAAAAAAA', this.state.query);   // this will show "true"
  }

  handleFavorites = (id, elem, a1) => {
    var filter = this.state.favorites.filter((elem) => elem.id === id)
    if (filter.length < 1) {
      this.setState({ favorites: [...this.state.favorites, elem] })
    }
    //    console.log('View FAVORITES ', this.state.favorites);
  }

  handleViews = (id, elem, a1) => {
    var filter = this.state.viewlater.filter((elem) => elem.id === id)
    if (filter.length < 1) {
      this.setState({ viewlater: [...this.state.viewlater, elem] })
    }
    //    console.log('View LATER ', this.state.viewlater);
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.query === "") return
    var strQuery = this.state.query.replace(/\s+/g, "+") // replace multispace/space with +
    //   console.log('------->', this.state.query );

    const FETCH_URL = `${this.BASE_URL}&query=${strQuery}`
    fetch(FETCH_URL)
      .then((response) => response.json())
      .then((json) => {
        const movies = json.results
        //        console.log('vvvvv ',movies);
        this.setState({ movies: movies })
      })
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({ query: e.target.value })
    //    console.log('  =====> ', this.state.query);
  }

  viewDescription = (idMovie) => {
    const filterDescription = this.state.movies.filter(
      (movie) => movie.id === idMovie
    )

    const newCurrentMovie =
      filterDescription.length > 0 ? filterDescription[0] : null
    var youtube = ""
    var site = ""

    const FETCH_URL = `${this.VIDEO_TRIAL_START}${idMovie}${this.VIDEO_TRIAL_STOP}`

    //     console.log(' Show Description Link ', FETCH_URL);
    fetch(FETCH_URL)
      .then((response) => response.json())
      .then((json) => {
        youtube = json.results[json.results.length - 1].key.replace(" ", "")
        site = json.results[json.results.length - 1].site
        if (site.toLowerCase() === "youtube") {
          this.setState({ youtubeLink: youtube })
        }
      })
      .catch(function() {})
    this.setState({ viewFav: null })
    this.setState({ viewLat: null })
    this.setState({ main: null })
    this.setState({ currentMovie: newCurrentMovie })
  }

  viewFavorite = () => {
    this.setState({ viewFav: "F" })

    this.setState({ viewLat: null })
    this.setState({ currentMovie: null })
    this.setState({ youtubeLink: "" })
    this.setState({ main: null })

    //   console.log('View Favorites');
  }

  viewLater = () => {
    this.setState({ viewLat: "L" })

    this.setState({ viewFav: null })
    this.setState({ currentMovie: null })
    this.setState({ main: null })
    this.setState({ youtubeLink: "" })
    //    console.log('View Later');
  }

  closeDescription = () => {
    this.setState({ currentMovie: null })
    this.setState({ youtubeLink: "" })
    this.setState({ viewFav: null })
    this.setState({ viewLat: null })
    this.setState({ main: "M" })
  }

  search() {
    if (this.state.query === "") return

    var strQuery = this.state.query.replace(/\s+/g, "+") // replace multispace/space with +
    const FETCH_URL = `${this.BASE_URL}&query=${strQuery}`
    fetch(FETCH_URL)
      .then((response) => response.json())
      .then((json) => {
        const movies = json.results
        this.setState({ movies: movies })
      })
    console.log(" this.state ", this.state.movies)
  }

  render() {
    //    const displayBody = this.state.displayBody;

    return (
      <div className="App">
        <Header viewFavorite={this.viewFavorite} viewLater={this.viewLater} />

        {this.state.main !== null ? (
          <div>
            <SearchBox
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
            <ListOfMovies
              viewDescription={this.viewDescription}
              movies={this.state.movies}
            />
          </div>
        ) : (
          ""
        )}

        {this.state.currentMovie !== null ? (
          <MovieDescription
            currentMovie={this.state.currentMovie}
            closeDescription={this.closeDescription}
            youtubeLink={this.state.youtubeLink}
            handleFavorites={this.handleFavorites}
            handleViews={this.handleViews}
          />
        ) : (
          ""
        )}

        {this.state.viewFav !== null ? (
          <FavoriteMovies
            records={this.state.favorites}
            closeFavorite={this.closeDescription}
            viewDescription={this.viewDescription}
          />
        ) : (
          ""
        )}

        {this.state.viewLat !== null ? (
          <ViewLaterMovies
            records={this.state.viewlater}
            closeLater={this.closeDescription}
            viewDescription={this.viewDescription}
          />
        ) : (
          ""
        )}
      </div>
    )
  }
}

export default App
