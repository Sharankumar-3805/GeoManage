import React from "react";
import StateList from "./StateList";

const CountryList = ({
  countries,
  editCountry,
  deleteCountry,
  addState,
  editState,
  deleteState,
  addCity,
  deleteCity,
}) => {
  return (
    <div className="country-list">
      {countries.map((country) => (
        <div key={country.id} className="country-card">
          <h2>
            {country.name}
            <button className="edit-btn" onClick={() => editCountry(country.id)}>
              Edit
            </button>
            <button className="delete-btn" onClick={() => deleteCountry(country.id)}>
              Delete
            </button>
          </h2>
          <button className="add-state-btn" onClick={() => addState(country.id)}>
            Add State
          </button>
          <StateList
            countryId={country.id}
            states={country.states}
            editState={editState}
            deleteState={deleteState}
            addCity={addCity}
            deleteCity={deleteCity}
          />
        </div>
      ))}
    </div>
  );
};

export default CountryList;