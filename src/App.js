import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CartMenu from './components/CartMenu';

function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const updateQuantity = (productId, quantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === productId ? { ...item, quantity: Math.max(quantity, 1) } : item
            )
        );
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    };
    return (
        <Router>
            <div className='container mx-auto p-4'>
                <header className='flex flex-col'>
                    <nav className='flex justify-between items-center bg-[#1882ff] p-4 rounded shadow-md mb-5'>
                        <div className='flex space-x-4'>
                            <Link to='/' className='text-white font-bold'>
                                Home
                            </Link>
                            <Link to='/products' className='text-white'>
                                Products
                            </Link>
                        </div>
                        <Link to='/cart' className='text-lg font-semibold text-white relative'>
                            Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
                        </Link>
                    </nav>
                </header>
                <Routes>
                    <Route path='/' element={<HomePage addToCart={addToCart} removeFromCart={removeFromCart}
                                                       updateQuantity={updateQuantity}/>}/>
                    <Route path='//products' element={<HomePage addToCart={addToCart} removeFromCart={removeFromCart}
                                                       updateQuantity={updateQuantity}/>}/>
                    <Route path='/products/:id' element={<ProductPage addToCart={addToCart}/>}/>
                    <Route
                        path='/cart'
                        element={
                            <CartPage
                                cartItems={cartItems}
                                removeFromCart={removeFromCart}
                                updateQuantity={updateQuantity}
                            />
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
