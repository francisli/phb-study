import { Link } from "react-router-dom";
import { Container, Burger, Title } from "@mantine/core";
import classes from "./HeaderSimple.module.css";

export function HeaderSimple({ opened, toggle }) {
  return (
    <header className={classes.header}>
      <Container fluid className={classes.inner}>
        <Link to="/">
          <Title order={3}>PHB 63</Title>
        </Link>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </Container>
    </header>
  );
}
