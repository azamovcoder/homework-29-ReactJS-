import "./App.css";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import SinglePage from "./pages/singlePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SinglePage />} />
      </Routes>
    </>
  );
}

export default App;
