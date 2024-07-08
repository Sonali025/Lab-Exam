import { render } from "@testing-library/react";
import React from "react";
import { RouterProvider } from "react-router-dom";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={customrouter}
    />
);
