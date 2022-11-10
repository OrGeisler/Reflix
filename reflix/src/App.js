import './App.css';
import Navigate from './components/Navigate';
import { BrowserRouter as Router ,Route , Link} from 'react-router-dom'
import Home from './components/Home';
import User from './components/User';
import Movie from './components/MovieCard';
import { Component } from 'react';
import movies from './utils/app-movies';
import users from './utils/app-users';
import Movies from './components/Movies';
import UserPage from './components/UserPage';



class App extends Component {
  constructor(){
    super()
    this.state = {
      users : users,
      movies : movies,
      searchText : ""
    }
  }

  updateSearchText = (event) => {
    this.setState({
      searchText: event.target.value
    })
}

  increaseMoney = (userId) => {
    this.state.users[userId].budget = this.state.users[userId].budget + 10
  }

  decreaseMoney = (userId) => {
    this.state.users[userId].budget = this.state.users[userId].budget - 10
  }

  movieAction = (movieId,userId) => {
     let movies = [...this.state.movies]
     const isRented = movies[movieId]['isRented'] 
     if(isRented){
      this.increaseMoney(userId)
     }
     else{
      this.decreaseMoney(userId)
     }
     movies[movieId]['isRented'] = !isRented
     this.setState({movies:movies})
  }

  render (){
    return(
    <Router>
    <div className="App">
      <div id="home-background"></div>
      <Navigate/>
      <Route path="/" exact render = {() => <Home users = {this.state.users}/>}/>
      <Route path="/catalog" exact render = {() => <Movies displayOnly = {true} type = "catalog" movies = {this.state.movies} />}/>
      <Route path="/catalog/:user" exact render={({ match }) => <UserPage updateSearchText = {this.updateSearchText} movieAction = {this.movieAction} match={match} state = {this.state}/>}/>
    </div>
    </Router>
  )}
}

export default App;
