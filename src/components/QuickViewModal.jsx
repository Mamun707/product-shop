import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QuickViewModal = ({ productId, closeModal }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/${productId}`)
            .then((res) => setProduct(res.data));
    }, [productId]);

    if (!product) return null;

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='bg-white rounded-lg p-4 max-w-md w-full'>
                <button onClick={closeModal} className='text-gray-500 hover:text-black'>
                    X
                </button>
                <h2 className='text-lg font-bold mb-2'>{product.title}</h2>
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className='w-full rounded-lg mb-4'
                />
                <p className='text-gray-700 mb-4'>{product.description}</p>
                <div className='flex justify-between items-center'>
                    <span className='text-lg font-semibold text-gray-800'>${product.price}</span>
                </div>
            </div>
        </div>
    );
};

export default QuickViewModal;
