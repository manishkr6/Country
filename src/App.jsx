import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Country from "./pages/Country";
import Contact from "./pages/Contact";
import "./App.css";
import AppLayout from "./components/layout/AppLayout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "country", element: <Country /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

const App = () => {
  return (
    <div className="app-container">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
