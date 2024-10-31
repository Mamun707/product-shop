import React from 'react';

const SearchBar = ({ onSearch }) => {
    return (
        <input
            type='text'
            className='border border-gray-300 rounded p-2 w-full'
            placeholder='Search for products...'
            onChange={(e) => onSearch(e.target.value)}
        />
    );
};

export default SearchBar;
