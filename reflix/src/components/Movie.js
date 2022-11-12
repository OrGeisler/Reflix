import "../styles/Movie.css";

function Movie(props) {
  const movie = props.movies[props.match.params.movie];

  return (
    <div>
      <div className="title">{movie.title}</div>
      <img className="img" src={movie.img} width="300" height="400" />
      <div className="desc">{movie.descrShort}</div>
    </div>
  );
}

export default Movie;
