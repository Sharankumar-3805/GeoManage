import React, { useState } from "react";
import CountryList from "./CountryList";
import "./App.css"; 
const App = () => {
  const [countries, setCountries] = useState([]);

  const addCountry = () => {
    const countryName = prompt("Enter country name:");
    if (countryName) {
      setCountries([...countries, { id: Date.now(), name: countryName, states: [] }]);
    }
  };

  const editCountry = (countryId) => {
    const newName = prompt("Enter new country name:");
    if (newName) {
      setCountries(
        countries.map((country) =>
          country.id === countryId ? { ...country, name: newName } : country
        )
      );
    }
  };


  const deleteCountry = (countryId) => {
    if (window.confirm("Are you sure you want to delete this country?")) {
      setCountries(countries.filter((country) => country.id !== countryId));
    }
  };

  const addState = (countryId) => {
    const stateName = prompt("Enter state name:");
    if (stateName) {
      setCountries(
        countries.map((country) =>
          country.id === countryId
            ? { ...country, states: [...country.states, { id: Date.now(), name: stateName, cities: [] }] }
            : country
        )
      );
    }
  };

  const editState = (countryId, stateId) => {
    const newName = prompt("Enter new state name:");
    if (newName) {
      setCountries(
        countries.map((country) =>
          country.id === countryId
            ? {
                ...country,
                states: country.states.map((state) =>
                  state.id === stateId ? { ...state, name: newName } : state
                ),
              }
            : country
        )
      );
    }
  };

  const deleteState = (countryId, stateId) => {
    if (window.confirm("Are you sure you want to delete this state?")) {
      setCountries(
        countries.map((country) =>
          country.id === countryId
            ? { ...country, states: country.states.filter((state) => state.id !== stateId) }
            : country
        )
      );
    }
  };

  const addCity = (countryId, stateId) => {
    const cityName = prompt("Enter city name:");
    if (cityName) {
      setCountries(
        countries.map((country) =>
          country.id === countryId
            ? {
                ...country,
                states: country.states.map((state) =>
                  state.id === stateId
                    ? { ...state, cities: [...state.cities, { id: Date.now(), name: cityName }] }
                    : state
                ),
              }
            : country
        )
      );
    }
  };

  const deleteCity = (countryId, stateId, cityId) => {
    if (window.confirm("Are you sure you want to delete this city?")) {
      setCountries(
        countries.map((country) =>
          country.id === countryId
            ? {
                ...country,
                states: country.states.map((state) =>
                  state.id === stateId
                    ? { ...state, cities: state.cities.filter((city) => city.id !== cityId) }
                    : state
                ),
              }
            : country
        )
      );
    }
  };

  return (
    <div>
      <h1>Country, State, and City Management</h1>
      <button onClick={addCountry}>Add Country</button>
      <CountryList
        countries={countries}
        editCountry={editCountry}
        deleteCountry={deleteCountry}
        addState={addState}
        editState={editState}
        deleteState={deleteState}
        addCity={addCity}
        deleteCity={deleteCity}
      />
    </div>
  );
};

export default App;
