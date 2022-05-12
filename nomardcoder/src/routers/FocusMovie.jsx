import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./FocusMovie.module.css";

function FocusMovie() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className={styles.box}>
      {loading ? (
        <p className={styles.loading}>Loading...</p>
      ) : (
        <div>
          <img
            className={styles.img}
            src={movie.medium_cover_image}
            alt={movie.title}
          />
          <h2 className={styles.title}>{movie.title}</h2>
          <hr />
          {movie.genres.map((genre) => (
            <li className={styles.genre} key={genre}>
              {genre}
            </li>
          ))}
        </div>
      )}
    </div>
  );
}
export default FocusMovie;
