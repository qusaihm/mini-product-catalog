import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppNavbar from "./components/Navbar";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;