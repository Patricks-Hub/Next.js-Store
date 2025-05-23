import Image from "next/image";

export default function ItemCard({ product, onAddToCart }) {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
      <div className="relative w-full h-48">
        <Image
          src={product.img}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 truncate">
          {product.name}
        </h2>
        <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
        <p className="text-sm text-gray-500 mt-1">
          Category: {product.category}
        </p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full hover:bg-blue-600 transition-colors duration-300"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
