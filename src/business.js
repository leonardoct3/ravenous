import React from "react";
import './business.css';

function Business() {
    const business = {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90
    };
    return (
        <div className="Business">
            <div className="image-container">
                <img src={business.imageSrc} alt="business" />
            </div>
            <div className="text-container">
                <div className="business-address">
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state} {business.zipCode}</p>
                </div>
                <div className="business-rating">
                    <h2>{business.category}</h2>
                    <h3>{business.rating}</h3>
                    <p>{business.reviewCount}</p>
                </div>
            </div>
        </div>
    )
}

export default Business;