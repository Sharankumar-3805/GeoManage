import React from "react";
import CityList from "./CityList";

const StateList = ({ countryId, states, editState, deleteState, addCity, deleteCity }) => {
  return (
    <div className="state-list">
      {states.map((state) => (
        <div key={state.id} className="state-card">
          <h3>
            {state.name}
            <button className="edit-btn" onClick={() => editState(countryId, state.id)}>
              Edit
            </button>
            <button className="delete-btn" onClick={() => deleteState(countryId, state.id)}>
              Delete
            </button>
          </h3>
          <button className="add-city-btn" onClick={() => addCity(countryId, state.id)}>
            Add City
          </button>
          <CityList
            countryId={countryId}
            stateId={state.id}
            cities={state.cities}
            deleteCity={deleteCity}
          />
        </div>
      ))}
    </div>
  );
};

export default StateList;