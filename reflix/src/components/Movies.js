import '../styles/Movies.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCard from './MovieCard';
import React, { Component } from 'react';


class Movies extends Component {

    fillterBySearch = (movie) => {
        const searchText = this.props.searchText.toUpperCase()
        if ((movie.title.toUpperCase()).includes(searchText)) {
            return <Col><MovieCard key ={movie.id} movieAction={this.props.movieAction} displayOnly={this.props.displayOnly} movie={movie} user={this.props.user} /></Col>
        }
    }


    render() {
        const movies = this.props.movies
        return (
            <Container>
                <Row>
                    <div className='headline-font'>{this.props.type}</div>
                    {this.props.displayOnly ? <div>** to rent movies please log in first ** </div> : null}
                </Row>
                <Row>
                    {(this.props.type == "catalog" && !this.props.displayOnly) ? movies.map(movie => this.fillterBySearch(movie)) :
                        movies.map(movie => {
                            if (movie.isRented) {
                                return <Col><MovieCard key ={movie.id} movieAction={this.props.movieAction} displayOnly={this.props.displayOnly}
                                    movie={movie} user={this.props.user} rented={true} /></Col>
                            }
                        })}
                    {(this.props.displayOnly) ? movies.map(movie => <Col><MovieCard movieAction={this.props.movieAction} displayOnly={this.props.displayOnly} movie={movie} user={this.props.user} /></Col>) : null}
                </Row>
            </Container>
        )
    };
}

export default Movies;