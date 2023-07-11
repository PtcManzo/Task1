import React from 'react';
import Link from 'next/link';
import '../public/styles.css';

function ProductCard({ product, addToCart, removeFromCart }) {
  return (
    <div className="border p-4 rounded overflow-hidden shadow-lg">
      <Link href={`/product/${product.id}`}>
        <div className="cursor-pointer">
          <img src={product.image} alt={product.title} className="w-full h-48 object-contain" />
        </div>
      </Link>
      <div className="px-6 py-4">
        <Link href={`/product/${product.id}`}>
          <div className="font-bold text-xl mb-2">{product.title}</div>
        </Link>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          ${product.price}
        </span>
      </div>
      <div className="w-full px-6 pt-4 pb-2">
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Add to cart
        </button>
        <button
          onClick={() => removeFromCart(product)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Remove from cart
        </button>

      </div>
    </div>
  );
}

export default ProductCard;
