import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/MovieCard.css'
import Movies from './Movies';
import UserNav from './UserNav';


function UserPage(props) {
  const user = props.state.users[props.match.params.user]
  const movies = props.state.movies
  const search = props.state.searchText

  return (
    <div>
        <UserNav user = {user} updateSearchText = {props.updateSearchText} searchText ={props.state.searchText} />
        <Movies searchText ={search} movieAction = {props.movieAction} displayOnly = {false} type = "rented" movies = {movies} user = {user}  />
        <Movies searchText ={search} movieAction = {props.movieAction} displayOnly = {false} type = "catalog" movies = {movies} user = {user} />
    </div>
  );
}

export default UserPage;