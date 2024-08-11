import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductsPage from "./pages/productsPage";
import CartPage from "./pages/cartPage";
import { selectCartItems } from "./redux/cartSlice";
import Footer from "./components/footer";

function App() {
  const cartLength = useSelector((state) => selectCartItems(state).length);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <nav className="w-full p-4 bg-blue-500 text-white flex justify-between">
          <h1 className="font-bold text-2xl">Welcome to the Shopping</h1>
          <div className="flex flex-row gap-5 items-center">
            <Link to="/" className="text-lg font-semibold">
              Products
            </Link>
            <Link to="/cart" className="text-lg font-semibold relative">
              Cart
              {cartLength > 0 && (
                <span className="absolute bottom-3 left-4 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">
                  {cartLength}
                </span>
              )}
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
