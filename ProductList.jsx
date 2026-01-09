import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addItem } from "./CartSlice";
import "./ProductList.css";

export default function ProductList() {
  const dispatch = useDispatch();

  // Access Redux cart items
  const cartItems = useSelector((state) => state.cart.items);

  const plantsArray = [
    {
      name: "Snake Plant",
      image: "https://i.imgur.com/2nCt3Sbl.jpg",
      description: "Produces oxygen at night.",
      cost: 15,
    },
    {
      name: "Spider Plant",
      image: "https://i.imgur.com/1bX5QH6.jpg",
      description: "Filters harmful toxins.",
      cost: 12,
    },
    {
      name: "Peace Lily",
      image: "https://i.imgur.com/9E3sY6Y.jpg",
      description: "Removes mold spores.",
      cost: 18,
    },
  ];

  // Track added items
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart({ ...addedToCart, [plant.name]: true });
  };

  return (
    <div className="product-grid">
      {plantsArray.map((plant) => (
        <div key={plant.name} className="product-card">
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
          <p>${plant.cost}</p>

          <button
            onClick={() => handleAddToCart(plant)}
            disabled={addedToCart[plant.name]}
          >
            {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
}
