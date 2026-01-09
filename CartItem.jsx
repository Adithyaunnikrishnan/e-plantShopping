import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, updateQuantity } from "./CartSlice";
import { useNavigate } from "react-router-dom";

export default function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        amount: item.quantity + 1,
      })
    );
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          name: item.name,
          amount: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleContinueShopping = () => {
    navigate("/plants");
  };

  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.name}>
          <h3>{item.name}</h3>
          <button onClick={() => handleDecrement(item)}>-</button>
          {item.quantity}
          <button onClick={() => handleIncrement(item)}>+</button>
          <button onClick={() => handleRemove(item)}>Delete</button>
        </div>
      ))}

      <button onClick={handleContinueShopping}>
        Continue Shopping
      </button>
    </div>
  );
}
