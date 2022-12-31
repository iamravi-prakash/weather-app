import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f514b1e1efc6686af7e32d265205c1ba`;
      const response = await fetch(url);
      //console.log(response);
      const resJson = await response.json();
      //console.log(resJson);
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="serach"
            className="inputField"
            //defaultValue=""
            onChange={(e) => {
              //const event = e.target.value;
              //console.log(event);
              setSearch(e.target.value);
            }} //contolled
          ></input>
        </div>
        {!city ? (
          <p style={{ textAlign: "center" }}>No City Found </p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">{search}</h2>
              <h1 className="temp">{city.temp}°C</h1>

              <h3 className="tempmin_max">Min: 5.25 | Max: 5.25</h3>
            </div>

            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
