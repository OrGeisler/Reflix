import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/MovieCard.css'
import { Component } from 'react';
import { Link } from 'react-router-dom'


class MovieCard extends Component {

  activateMovieAction = () => {
    const movie = this.props.movie
    const user = this.props.user
    this.props.movieAction(movie.id, user.id)
  }

  render() {
    const movie = this.props.movie
    return (
      <Card className='movie' style={{ width: '12rem', height: '20rem' }}>
        <Link to={`/movie/${movie.id}`}>
          <Card.Img variant="top" src={movie.img} height="180rem" />
        </Link>
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
          </Card.Text>
          {this.props.displayOnly ? null : <Button onClick={this.activateMovieAction} variant="primary">
            {this.props.rented ? "Return" : "Rent"}</Button>}
        </Card.Body>
      </Card>
    )
  }
}

export default MovieCard;