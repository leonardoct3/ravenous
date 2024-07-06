import React, { useState } from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

function SearchBar({ searchYelp }) {

    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('best_match');

    const getSortByClass = (option) => {
        return sortBy === option ? 'active' : '';
    };

    const handleSortByChange = (option) => {
        setSortBy(option);
    }

    const handleTermChange = (event) => {
        setTerm(event.target.value);
    }

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    }

    const handleSearch = (event) => {
        searchYelp(term, location, sortBy);
        event.preventDefault();
    }

    return (
        <div className='SearchBar'>
            <div className='SearchBar-sort-options'>
                <ul>
                    {Object.keys(sortByOptions).map(option => {
                        let sortByOptionValue = sortByOptions[option];
                        return (
                            <li key={sortByOptionValue} className={getSortByClass(sortByOptionValue)} onClick={() => handleSortByChange(option)}>
                                {option}
                            </li>
                        )
                    })};
                </ul>
            </div>
            <div className='SearchBar-fields'>
                <input placeholder='Search Businesses' value={term} onChange={handleTermChange} />
                <input placeholder='Where?' value={location} onChange={handleLocationChange} />
            </div>
            <div className='SearchBar-submit'>
                <button onClick={handleSearch}>Let's Go</button>
            </div>
        </div>
    )
}

export default SearchBar;