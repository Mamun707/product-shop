// src/pages/HomePage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const HomePage = ({ addToCart ,removeFromCart,updateQuantity}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products').then((res) => setProducts(res.data.products));
    }, []);

    return (
        <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} removeFromCart={removeFromCart} updateQuantity={updateQuantity}/>
            ))}
        </div>

    );
};

export default HomePage;
