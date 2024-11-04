import { Stack, Title } from "@mantine/core";
import { Link } from "react-router-dom";

import ROUTES from "../routes.json";

function Home() {
  return (
    <>
      <Title mb="lg">Home</Title>
      <Stack>
        {ROUTES.map((r) => (
          <Link to={r.path} key={r.path}>
            {r.title}
          </Link>
        ))}
      </Stack>
    </>
  );
}

export default Home;
