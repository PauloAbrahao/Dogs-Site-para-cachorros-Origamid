import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../UserContext";
import { ReactComponent as MinhasFotos } from "../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../Assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const { mobile, setMobile } = React.useState(null);
  const { userLogOut } = React.useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        {mobile && "Minhas fotos"}
        <MinhasFotos />
      </NavLink>

      <NavLink to="/conta/estatisticas">
        {mobile && "Estatísticas"}
        <Estatisticas />
      </NavLink>

      <NavLink to="/conta/postar">
        {mobile && "Adicionar foto"}
        <AdicionarFoto />
      </NavLink>
      <button onClick={userLogOut}>
        {mobile && "Sair"}
        Sair <Sair />
      </button>
    </nav>
  );
};

export default UserHeaderNav;
