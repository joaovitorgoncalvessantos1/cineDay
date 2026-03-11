import styles from "./NavBar.module.css";
import { CiSearch } from "react-icons/ci";

import logoCineDiary from "./logoCineDiary.png";

function NavBar() {
  return (
    <nav className={styles.NavBar}>
      <ul className={styles.Conteiner}>
        <li>
          <img
            className={styles.logoCineDiary}
            src={logoCineDiary}
            width={150}
            alt="logoCineDiary"
            height={99}
          />
        </li>

        <li>
          <div className={styles.searchBox}>
            <CiSearch className={styles.lupa} />
            <input
              type="search"
              className={styles.search}
              name="search"
              id="search"
              placeholder="Pesquisar filmes,series..."
            />
          </div>
        </li>
        <li>
    <div className={styles.Conteiner_links}>          <a className={styles.logout} href="#">
            logout
          </a>
          
          <a className={styles.logout} href="#">
            Minha lista
          </a></div>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
