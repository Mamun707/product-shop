import React from 'react';

const CartMenu = ({ cartItems }) => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className='fixed top-0 right-0 bg-white p-4 shadow-lg rounded-lg max-w-xs w-full'>
            <h2 className='text-lg font-semibold'>Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id} className='flex justify-between my-2'>
                        <span>{item.title}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </li>
                ))}
            </ul>
            <div className='mt-4'>
                <span className='text-lg font-bold'>Total: ${total.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default CartMenu;
