import { useState,useEffect } from "react";
import NavBar from "./components/Navbar/NavBar";
import MovieCard from "./components/MovieCard/MovieCard";
import ConteinerCards from "./components/ConteinerCards/ConteinerCards";

function App() {

  const [search, setSearch] = useState("");
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {

    if (!search) return;

    async function buscarFilmes() {

      const url = `https://api.themoviedb.org/3/search/movie?api_key=6812781b2c4fa1feadbd90bfe8879f95&query=${search}&language=pt-BR&page=1`;

      const response = await fetch(url);
      const dados = await response.json();

      setFilmes(dados.results);

    }

    buscarFilmes();

  }, [search]);
  return (
    <>
        <NavBar setSearch={setSearch} />
    <ConteinerCards>
            {filmes.map((filme) => (
  <MovieCard
    key={filme.id}
    title={filme.title}
    vote_average={filme.vote_average}
    release_date={filme.release_date}
    poster_path={filme.poster_path}
  />
))}
    </ConteinerCards>

    </>
  );
}

export default App;