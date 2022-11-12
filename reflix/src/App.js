import './App.css';
import Navigate from './components/Navigate';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import Movie from './components/Movie';
import { Component } from 'react';
import movies from './utils/app-movies';
import users from './utils/app-users';
import Movies from './components/Movies';
import UserPage from './components/UserPage';
import consts from './utils/consts';


class App extends Component {
  constructor() {
    super()
    this.state = {
      users: users,
      movies: movies,
      searchText: ""
    }
  }

  updateSearchText = (event) => {
    this.setState({
      searchText: event.target.value
    })
  }

  increaseMoney = (userId) => {
    this.state.users[userId].budget = this.state.users[userId].budget + consts.MOVIEPRICE
  }

  decreaseMoney = (userId) => {
    let currBudget = this.state.users[userId].budget
    if (currBudget <= 0) {
      alert("Not enough moeny!")
      return false
    }
    else {
      this.state.users[userId].budget = this.state.users[userId].budget - consts.MOVIEPRICE
      return true
    }
  }

  movieAction = (movieId, userId) => {
    let movies = [...this.state.movies]
    const isRented = movies[movieId]['isRented']
    if (isRented) {
      this.increaseMoney(userId)
    }
    else if (!this.decreaseMoney(userId)) {
      return
    }
    movies[movieId]['isRented'] = !isRented
    this.setState({ movies: movies })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div id="home-background"></div>
          <Navigate />
          <Route path="/" exact render={() => <Home users={this.state.users} />} />
          <Route path="/catalog" exact render={() => <Movies displayOnly={true} type="catalog" movies={this.state.movies} />} />
          <Route path="/catalog/:user" exact render={({ match }) => <UserPage updateSearchText={this.updateSearchText} movieAction={this.movieAction} match={match} state={this.state} />} />
          <Route path="/movie/:movie" exact render={({ match }) => <Movie match={match} movies={this.state.movies} />} />
        </div>
      </Router>
    )
  }
}

export default App;
