import React from 'react';
import Business from './business';
import './BusinessList.css';

function BusinessList( {businesses} ) {
    return (
        <div className='BusinessList'>
            {businesses.map(business => {
                return <Business key={business.name} />;
            })}
        </div>
    )
}

export default BusinessList;