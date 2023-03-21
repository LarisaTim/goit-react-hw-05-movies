import { NavLink, Outlet} from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => (
  <header className={s.header}>
    <nav  >
      <Outlet/>
      <NavLink exact to="/" className={({ isActive }) =>
          isActive ? s.activeLink : s.link}>
        Home
      </NavLink>
      <NavLink to="/movies" className={({ isActive }) =>
          isActive ? s.activeLink : s.link}>
        Movies
      </NavLink>
    </nav>
  </header>
);
export default Navigation;
