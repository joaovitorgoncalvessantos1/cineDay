import styles from "./MovieCard.module.css";

function MovieCard({ title, vote_average, release_date, poster_path }) {

  const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`

  return (
    <div className={styles.conteinerMovieCard}>
      <div className={styles.card}>
        <div className={styles.poster}>
          <img src={imgUrl} alt={title} />
        </div>

        <div className={styles.titulo}>
          <h2>{title}</h2>
        </div>

        <div className={styles.info}>
          <span className={styles.nota}>⭐ {vote_average}</span>
          <span className={styles.ano}>{release_date}</span>
        </div>

        <button className={styles.botao}>
          Adicionar a minha lista
        </button>
      </div>
    </div>
  );
}

export default MovieCard;