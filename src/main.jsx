import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import Layout from "./Layout.jsx";
import Home from "./routes/Home.jsx";
import AssessmentMedical from "./routes/AssessmentMedical.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "patient-assessment-medical",
        element: <AssessmentMedical />,
      },
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
