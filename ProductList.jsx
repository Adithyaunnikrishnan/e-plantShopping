import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
import "./App.css";

const plantsArray = [
  // Indoor Plants
  {
    category: "Indoor Plants",
    name: "Snake Plant",
    image: "https://via.placeholder.com/150",
    description: "Low maintenance indoor plant",
    cost: "$15",
  },
  {
    category: "Indoor Plants",
    name: "Peace Lily",
    image: "https://via.placeholder.com/150",
    description: "Air purifying plant",
    cost: "$18",
  },
  {
    category: "Indoor Plants",
    name: "Spider Plant",
    image: "https://via.placeholder.com/150",
    description: "Easy to grow indoor plant",
    cost: "$12",
  },
  {
    category: "Indoor Plants",
    name: "Aloe Vera",
    image: "https://via.placeholder.com/150",
    description: "Medicinal indoor plant",
    cost: "$10",
  },
  {
    category: "Indoor Plants",
    name: "Rubber Plant",
    image: "https://via.placeholder.com/150",
    description: "Glossy leaf indoor plant",
    cost: "$20",
  },
  {
    category: "Indoor Plants",
    name: "ZZ Plant",
    image: "https://via.placeholder.com/150",
    description: "Drought tolerant plant",
    cost: "$22",
  },

  // Outdoor Plants
  {
    category: "Outdoor Plants",
    name: "Rose",
    image: "https://via.placeholder.com/150",
    description: "Beautiful flowering plant",
    cost: "$25",
  },
  {
    category: "Outdoor Plants",
    name: "Hibiscus",
    image: "https://via.placeholder.com/150",
    description: "Tropical flowering plant",
    cost: "$18",
  },
  {
    category: "Outdoor Plants",
    name: "Jasmine",
    image: "https://via.placeholder.com/150",
    description: "Fragrant outdoor plant",
    cost: "$15",
  },
  {
    category: "Outdoor Plants",
    name: "Bougainvillea",
    image: "https://via.placeholder.com/150",
    description: "Climbing flowering plant",
    cost: "$20",
  },
  {
    category: "Outdoor Plants",
    name: "Tulsi",
    image: "https://via.placeholder.com/150",
    description: "Sacred medicinal plant",
    cost: "$10",
  },
  {
    category: "Outdoor Plants",
    name: "Sunflower",
    image: "https://via.placeholder.com/150",
    description: "Bright seasonal flower",
    cost: "$12",
  },

  // Succulents
  {
    category: "Succulents",
    name: "Echeveria",
    image: "https://via.placeholder.com/150",
    description: "Compact succulent plant",
    cost: "$8",
  },
  {
    category: "Succulents",
    name: "Haworthia",
    image: "https://via.placeholder.com/150",
    description: "Striped succulent plant",
    cost: "$9",
  },
  {
    category: "Succulents",
    name: "Jade Plant",
    image: "https://via.placeholder.com/150",
    description: "Symbol of good luck",
    cost: "$14",
  },
  {
    category: "Succulents",
    name: "Cactus",
    image: "https://via.placeholder.com/150",
    description: "Low water plant",
    cost: "$7",
  },
  {
    category: "Succulents",
    name: "Sedum",
    image: "https://via.placeholder.com/150",
    description: "Hardy succulent",
    cost: "$6",
  },
  {
    category: "Succulents",
    name: "Crassula",
    image: "https://via.placeholder.com/150",
    description: "Popular succulent variety",
    cost: "$11",
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem({ ...plant, quantity: 1 }));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  const categories = [...new Set(plantsArray.map((p) => p.category))];

  return (
    <div>
      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          <div className="product-grid">
            {plantsArray
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div className="product-card" key={plant.name}>
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>{plant.description}</p>
                  <p>{plant.cost}</p>

                  <button
                    disabled={addedToCart[plant.name]}
                    onClick={() => handleAddToCart(plant)}
                  >
                    {addedToCart[plant.name]
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
