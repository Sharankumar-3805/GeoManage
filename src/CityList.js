import React from "react";

const CityList = ({ countryId, stateId, cities, deleteCity }) => {
  return (
    <div className="city-list">
      {cities.map((city) => (
        <div key={city.id} className="city-card">
          <p>
            {city.name}
            <button className="delete-btn" onClick={() => deleteCity(countryId, stateId, city.id)}>
              Delete
            </button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default CityList;