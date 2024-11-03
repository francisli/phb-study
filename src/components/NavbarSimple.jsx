import { NavLink } from "react-router-dom";

import classes from "./NavbarSimple.module.css";
import routes from "../routes.json";

export function NavbarSimple({ onClick }) {
  const links = routes.map((r) => (
    <NavLink
      className={({ isActive }) =>
        `${classes.link} ${isActive ? classes["link--active"] : ""}`
      }
      to={r.path}
      key={r.path}
      onClick={() => onClick?.()}
    >
      <span>{r.title}</span>
    </NavLink>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>{links}</div>
    </nav>
  );
}
