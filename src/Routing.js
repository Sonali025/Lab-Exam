import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Create from "./components/create";
const customrouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/create",
        element: <Create></Create>,
      },
    ],
  },
]);
