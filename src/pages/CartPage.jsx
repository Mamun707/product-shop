// src/pages/CartPage.jsx
import React from 'react';

const CartPage = ({ cartItems, updateQuantity, removeFromCart }) => {
    if (cartItems.length === 0) {
        return <p>Your cart is empty.</p>;
    }

    const handleQuantityChange = (itemId, newQuantity) => {
        updateQuantity(itemId, newQuantity);
    };

    return (
        <div>
            <h2 className='text-2xl font-bold mb-4'>Your Cart</h2>
            <ul className='space-y-4'>
                {cartItems.map((item) => (
                    <li key={item.id} className='flex justify-between items-center border-b pb-2'>
                        <div className='flex items-center space-x-4'>
                            <img src={item.thumbnail} alt={item.title} className='w-16 h-16' />
                            <div>
                                <h3 className='text-lg font-semibold'>{item.title}</h3>
                                <p className='text-gray-600'>${item.price.toFixed(2)}</p>
                            </div>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <button
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                className='px-2 py-1 bg-gray-300 rounded'
                                disabled={item.quantity <= 1}
                            >
                                -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                className='px-2 py-1 bg-gray-300 rounded'
                            >
                                +
                            </button>
                        </div>
                        <button
                            onClick={() => removeFromCart(item.id)}
                            className='px-3 py-1 bg-red-500 text-white rounded'
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <div className='mt-4 text-lg font-bold'>
                Total: $
                {cartItems
                    .reduce((total, item) => total + item.price * item.quantity, 0)
                    .toFixed(2)}
            </div>
        </div>
    );
};

export default CartPage;
