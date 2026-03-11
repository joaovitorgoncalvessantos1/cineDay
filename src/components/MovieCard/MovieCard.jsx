import styles from "./MovieCard.module.css";
import nimona from "./nimona.png";

function MovieCard() {
  return (
    <div className={styles.conteinerMovieCard}>
      <div className={styles.card}>
        <div className={styles.poster}>
          <img src={nimona} alt="" />
        </div>
        <div className={styles.titulo}>
          <h2>titulo</h2>
        </div>
        <div className={styles.info}>
          <span className={styles.nota}>⭐ 8.5</span>
          <span className={styles.ano}>2014</span>
        </div>    
        <button className={styles.botao}>Adicionar a minha lista</button>
      </div>
  
    </div>
  );
}

export default MovieCard;
