import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";
import { UserContext } from "../UserContext";

const Header = () => {
  const { data, userLogOut } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo} aria-label="dogs - home">
          <Dogs />
        </Link>
        {data ? (
          <Link to="/conta" className={styles.login}>
            {data.nome}
            <button onClick={userLogOut}>Sair</button>
          </Link>
        ) : (
          <Link to="/login" className={styles.login}>
            Login | Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
