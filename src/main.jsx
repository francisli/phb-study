import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import Layout from "./Layout.jsx";
import Home from "./routes/Home.jsx";
import Quiz from "./components/Quiz.jsx";

import routes from "./routes.json";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      ...routes.map((r) => ({
        path: r.path,
        element: <Quiz title={r.title} filename={r.filename} />,
      })),
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>,
);
