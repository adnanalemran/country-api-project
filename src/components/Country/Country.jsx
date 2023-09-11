import { useState } from "react";
import "./Country.css";
const Country = ({ country }) => {
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVested] = useState(false);

  const handleVisited = () => {
    setVested(!visited);
  };

  return (
<> 
<div className="card bg-base-100 shadow-xl bg-[#061e2e] text-white">
  <figure className="px-10 pt-10"><img src={flags.png} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name.common}</h2>
     population : {population} 
       area: {area} 
      
        <small>Code {cca3}</small>
    
    <span className="font-bold text-red-500">
    {visited  ? ` i have Visited this country  ` : 'i want to visit'}
    </span>
    <div className="card-actions justify-end">
      <button onClick={handleVisited}  className="btn btn-primary">{visited ? 'No Visited' : 'mark as visited'}</button>

    </div>
  </div>
</div>



 
    </>
  );
};

export default Country;
