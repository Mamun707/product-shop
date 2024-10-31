// src/pages/ProductPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductPage = ({ addToCart }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`).then((res) => setProduct(res.data));
    }, [id]);

    if (!product) return <p>Loading...</p>;

    const discountedPrice = product.price - product.price * (product.discountPercentage / 100);

    return (
        <div className='p-4'>
            <button
                onClick={() => navigate(-1)}
                className='bg-gray-300 text-black px-4 py-2 rounded mb-4'
            >
                Back
            </button>
            <div className='bg-white shadow-lg rounded-lg p-6'>
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className='w-full h-64 object-cover rounded-lg'
                />
                <h2 className='text-2xl font-bold mt-4'>{product.title}</h2>
                <p className='text-gray-600 mt-2'>{product.description}</p>
                <div className='mt-4'>
                    <span className='text-lg font-semibold text-gray-800'>
                        ${discountedPrice.toFixed(2)}
                    </span>
                    <span className='text-gray-400 line-through ml-2'>${product.price}</span>
                </div>
                <button
                    className='mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600'
                    onClick={() => addToCart(product)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductPage;
