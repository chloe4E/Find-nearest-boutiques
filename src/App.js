import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.js";
import NavBarFooter from "./components/NavBarFooter.js";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <NavBarFooter />
    </div>
  );
}

export default App;
