import { NavLink, Outlet} from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => (
  <header className={s.header}>
    <nav>
      <Outlet/>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
        Home
      </NavLink>
      <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
        Movies
      </NavLink>
    </nav>
  </header>
);
export default Navigation;
