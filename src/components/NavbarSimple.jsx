import { NavLink } from "react-router-dom";

import classes from "./NavbarSimple.module.css";

const data = [
  {
    link: "/patient-assessment-medical",
    label: "Patient Assessment - Medical",
  },
];

export function NavbarSimple() {
  const links = data.map((item) => (
    <NavLink
      className={({ isActive }) =>
        `${classes.link} ${isActive ? classes["link--active"] : ""}`
      }
      to={item.link}
      key={item.link}
    >
      <span>{item.label}</span>
    </NavLink>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>{links}</div>
    </nav>
  );
}
