import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");

  function handleChange(e) {
    setCity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(
      `
      http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=207b60a4410f6edd45cb3f792f6fbabf
      `
    )
      .then((res) => res.json())
      .then((data) => {
        const kelvin = data.main.temp;
        const celsius = Math.round(kelvin - 273.15);
        setResult(`Temperature at ${city} \n : ${celsius}° `);
      });
  }

  return (
    <div>
      <center>
        <div className="card mt-5">
          <div className="card-body">
            <h4 className="card-title">Weather App</h4>
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                size="30"
                type="text"
                value={city}
                name="city"
              />{" "}
              <br /> <br />
              <input
                className="btn btn-info"
                type="submit"
                value="Get Temperature"
              />
            </form>{" "}
            &nbsp;
            <h5> {result} </h5>
          </div>
        </div>
      </center>
    </div>
  );
}
