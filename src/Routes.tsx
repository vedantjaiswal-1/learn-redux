import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

export const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
