
import React from 'react';

function PropertyList() {
  const properties = [
    { id: 1, name: 'Casa 1' },
    { id: 2, name: 'Apartamento 2' },
    { id: 3, name: 'Casa 3' },
  ];

  return (
    <div>
      <h2>Lista de Propriedades</h2>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>{property.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PropertyList;
