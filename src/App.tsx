import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Shop from "./components/Shop";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Shop />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/details/:id"} element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
