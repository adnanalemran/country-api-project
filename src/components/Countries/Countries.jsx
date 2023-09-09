import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h3 className="text-2xl font-bold text-center text-red-500 p-8">
        Countries: {countries.length}
      </h3>
  <div className="grid  gap-4 grid-cols-1 lg:grid-cols-4 px-10 border-rose-700">
      {
        countries.map((country, index) => (
          <Country key={index} country={country} />
        ))
      }

  </div>

    </div>
  );
};

export default Countries;
