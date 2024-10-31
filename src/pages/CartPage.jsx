// src/pages/CartPage.jsx
import React from 'react';

const CartPage = ({ cartItems, updateQuantity, removeFromCart }) => {
    if (cartItems.length === 0) {
        return <p className='text-center text-xl'>Your cart is empty.</p>;
    }

    const handleQuantityChange = (itemId, newQuantity) => {
        updateQuantity(itemId, newQuantity);
    };

    return (
        <div className='container mx-auto p-4'>
            <h2 className='text-2xl font-bold mb-4 text-center'>Your Cart</h2>
            <ul className='space-y-4'>
                {cartItems.map((item) => (
                    <li key={item.id} className='flex justify-between items-center border-b pb-4'>
                        <div className='flex items-center space-x-4 flex-grow'>
                            <img src={item.thumbnail} alt={item.title} className='w-16 h-16 object-cover rounded' />
                            <div className='flex flex-col flex-grow'>
                                <h3 className='text-lg font-semibold'>{item.title}</h3>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <button
                                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                    className='px-2 py-1 bg-gray-300 rounded'
                                    disabled={item.quantity <= 1}
                                >
                                    -
                                </button>
                                <span className='text-lg'>{item.quantity}</span>
                                <button
                                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                    className='px-2 py-1 bg-gray-300 rounded'
                                >
                                    +
                                </button>
                            </div>
                            <p className='text-lg font-semibold ml-4'>${item.price.toFixed(2)}</p>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className='px-3 py-1 bg-red-500 text-white rounded'
                            >
                                Remove
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className='mt-4 text-lg font-bold text-right'>
                Total: $
                {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </div>
        </div>
    );
};

export default CartPage;
