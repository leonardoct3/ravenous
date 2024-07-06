import './App.css';
import React from 'react';
import SearchBar from './SearchBar';
import BusinessList from './BusinessList';
//import ReactDOM from 'react-dom/client';

const businesses = [
  {
      id: 1,
      imageSrc: 'https://via.placeholder.com/150',
      name: 'Restaurant One',
      address: '123 Main St',
      city: 'City One',
      state: 'State One',
      zipCode: '12345',
      category: 'Category One',
      rating: 4.5,
      reviewCount: 90
  },
  {
      id: 2,
      imageSrc: 'https://via.placeholder.com/150',
      name: 'Restaurant Two',
      address: '456 Another St',
      city: 'City Two',
      state: 'State Two',
      zipCode: '67890',
      category: 'Category Two',
      rating: 4.0,
      reviewCount: 80
  },
  {
      id: 3,
      imageSrc: 'https://via.placeholder.com/150',
      name: 'Restaurant Three',
      address: '789 Some Rd',
      city: 'City Three',
      state: 'State Three',
      zipCode: '54321',
      category: 'Category Three',
      rating: 4.2,
      reviewCount: 70
  }
];

function App() {
  return (
    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
