import React from 'react';

const PropertyList = ({ properties }) => {
  return (
    <div>
      {properties.map(property => (
        <div key={property.id}>
          <img src={property.cover} alt={property.name} />
          <h3>{property.name}</h3>
          <p>{property.location}</p>
          <p>{property.category}</p>
          <p>{property.price}</p>
          <p>{property.type}</p>
          <a href={property.buyLink}>Buy</a> {/* Add a Buy button */}
        </div>
      ))}
    </div>
  );
}

export default PropertyList;
