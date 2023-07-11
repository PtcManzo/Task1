import React from 'react';

function Cart({ cartItems, incrementItem, decrementItem, removeItem }) {
  return (
    <div className="fixed top-0 right-0 h-full w-1/4 md:w-1/3 lg:w-1/4 bg-red-200 p-4 overflow-y-scroll">
      <h2 className="text-xl font-bold mb-4 text-center ">My Cart</h2>
      {cartItems.length > 0 ? (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white p-2 rounded flex flex-col md:flex-row items-center md:justify-between">
              <img src={item.image} alt={item.title} className="w-12 h-12 object-cover mb-2 md:mb-0 md:mr-2" />
              <div className="flex-grow">
                <p className="font-sm">{item.title}</p>
                <p className="text-gray-500">${item.price}</p>
              </div>
              <div className="flex items-center flex-col">
                <button
                  onClick={() => decrementItem(item)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-2 rounded mr-2 mb-2"
                >
                  -
                </button>
                <span className="px-2 mb-2">{item.quantity || 0}</span>
                <button
                  onClick={() => incrementItem(item)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-2 rounded mr-2 mb-2"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(item)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">Your cart is empty</p>
      )}
    </div>
  );
}

export default Cart;
