import React, { useState } from "react";
import ItemCard from "../components/ItemCard";
import products from "../data/products.json"; // Import the JSON data

export default function Home() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (product) => {
    setCartCount(cartCount + 1); // Just update the count
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Mini Mart</h1>
        <div className="relative">
          Cart: {cartCount}
          {/* ... */}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ItemCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
