import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart, removeFromCart, updateQuantity }) => {
    const [isAdded, setIsAdded] = useState(false);
    const [quantity, setQuantity] = useState(0);

    const handleAddToCart = () => {
        if (!isAdded) {
            addToCart(product);
            setQuantity(1);
            setIsAdded(true);
        } else {
            setQuantity((prevQuantity) => prevQuantity + 1);
            updateQuantity(product.id, quantity + 1);
        }
    };

    const handleRemoveFromCart = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
            updateQuantity(product.id, quantity - 1);
        } else {
            setIsAdded(false);
            setQuantity(0);
            removeFromCart(product.id);
        }
    };

    const discountedPrice = product.price - product.price * (product.discountPercentage / 100);

    return (
        <div className='relative border rounded-lg shadow-lg overflow-hidden bg-white font-murecho'>
            {/* Discount Label */}
            <span className='absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded'>
                -৳ {product.discountPercentage}
            </span>

            {/* Product Image with Hover Overlay for Buttons */}
            <div className='relative'>
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className='w-210 h-210 object-cover'
                />

                <div
                    className='absolute inset-0 flex flex-col justify-center items-center bg-gray-800 bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity'>
                    <div className='flex items-center w-3/4'>
                        {isAdded && (
                            <button
                                onClick={handleRemoveFromCart}
                                className='flex-shrink-0 px-2 py-2 bg-green-600 text-white font-semibold rounded-l h-full'
                            >
                                <img src='./delete.png' alt='Remove' className="w-5 h-5"/>
                            </button>
                        )}

                        <button
                            onClick={handleAddToCart}
                            className={`flex-grow flex items-center justify-center py-2 rounded font-semibold ${
                                isAdded ? 'bg-green-600 text-white' : 'frosted-glass text-white border-2 border-[#fff]'
                            } h-full`}
                        >
                            {/* Conditionally render the image */}
                            {!isAdded && (
                                <img
                                    src='./cartadd.png' // Replace with your image path
                                    alt='Add to Cart'
                                    className="mr-2 w-5 h-5" // Adjust size as needed
                                />
                            )}

                            {/* Button Text */}
                            {isAdded ? `${quantity} Added in Cart` : 'Add to Cart'}
                        </button>

                        {isAdded && (
                            <button
                                onClick={handleAddToCart}
                                className='flex-shrink-0 px-2 py-2 bg-green-600 text-white font-murecho text-3xl rounded-r h-full'
                            >
                                +
                            </button>
                        )}
                    </div>

                    <Link
                        to={`/products/${product.id}`}
                        className='flex items-center justify-center w-3/4 mt-2 py-2  frosted-glass text-white font-semibold border-2 border-[#fff] rounded-md'
                    >
                        <img src='./eye.png' alt='eye' className='mr-2'/>Quick View
                    </Link>
                </div>
            </div>

            {/* Product Info (Always Visible) */}
            <div className='p-4'>
                <p className='text-sm font-semibold text-gray-500'>{product.brand}</p>
                <h3 className='text-lg font-bold text-gray-800'>{product.title}</h3>

                {/* Price with Discount */}
                <div className='mt-2 flex items-center'>
                    <span className='text-blue-500 text-xl font-bold'>
                        ৳ {discountedPrice.toFixed(2)}
                    </span>
                    <span className='text-gray-400 line-through ml-2'>৳ {product.price}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
