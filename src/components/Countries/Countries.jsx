import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Conutries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <h3 className="text-2xl font-bold text-center text-red-500 p-8">
          Countries: {countries.length}
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {countries.map((country) => (
            <Country key={country.cca3} country={country}>
            
            </Country>
          ))}
        </div>
      </div>
    </>
  );
};

export default Countries;
