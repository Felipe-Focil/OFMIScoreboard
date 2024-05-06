import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import ThemeToggleButton from "./components/ThemeToggleButton";
import FeaturedContests from "./components/FeaturedContests";

function App() {
  return (
    <>
      <h1>OFMI</h1>
      <FeaturedContests />
    </>
  );
}

export default App;
