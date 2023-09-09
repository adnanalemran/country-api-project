const Country = ({ country }) => {
  const { name } = country;
  const { flags} = country;

  return (
    <div >
      
     

      <div className="card card-side bg-base-100 shadow-xl   ">
        <figure>
          <img 
          className='w-28 p-4'
            src={flags.png}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Country Name: {name?.common}</h2>
          <p>Click the button to watch on Jetflix app.</p>

          <div className="card-actions justify-end">
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
