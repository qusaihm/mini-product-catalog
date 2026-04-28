import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import Products from "./pages/Products";
import Favorites from "./pages/Favorites";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter> 
      <AppNavbar />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/product/:id" element={<ProductDetails />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;