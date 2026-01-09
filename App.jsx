import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";

export default function App() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <>
      <nav className="navbar">
        <Link to="/">Paradise Nursery</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">🛒 {totalQuantity}</Link>
      </nav>

      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </>
  );
}
