import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";
import { useNavigate } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate subtotal for a single item
  const calculateItemTotal = (item) => {
    const price = parseFloat(item.cost.substring(1));
    return price * item.quantity;
  };

  // Calculate total cart amount
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      return total + calculateItemTotal(item);
    }, 0);
  };

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
    navigate("/products");
  };

  const handleCheckoutShopping = () => {
    alert("Checkout functionality coming soon!");
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.name}>
              <img src={item.image} alt={item.name} width="100" />
              <div>
                <h3>{item.name}</h3>
                <p>Unit Price: {item.cost}</p>
                <p>Quantity: {item.quantity}</p>
                <p>
                  Subtotal: ${calculateItemTotal(item).toFixed(2)}
                </p>

                <button onClick={() => handleIncrement(item)}>+</button>
                <button onClick={() => handleDecrement(item)}>-</button>
                <button onClick={() => handleRemove(item)}>Remove</button>
              </div>
            </div>
          ))}

          <h2>Total Amount: ${calculateTotalAmount().toFixed(2)}</h2>

          <button onClick={handleContinueShopping}>
            Continue Shopping
          </button>
          <button onClick={handleCheckoutShopping}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default CartItem;
