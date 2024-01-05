import React from "react";
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes.tsx";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
  );
}

export default App;
