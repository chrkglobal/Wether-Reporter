import React, {useState} from 'react';
import './App.css';

const App = () => {

  const [wether, setWether] = useState();
const [city, setCity] = useState("");
const [result, setResult] = useState("");

  const changeHandlar = (e) => {
    console.log(city);
    setCity(e.target.value);
  }

  const submitWetherReport = (e) => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
    .then( response=> response.json())
    .then(data => {
      // const kelvin = data.main.temp;
      // const celcius = kelvin - 273.15;
          setResult(
            // "Temperature at "+city+"\n"+Math.round(celcius)+"°C"
            data
            );
            setWether(data.weather[0]?.description);
            console.log('12345', data, wether);
    } )
    setCity('');
  }


  return (
    <div className="App">
      <header className="App-header">
        <h2>Wether Report App</h2>
        <form onSubmit={submitWetherReport}>
          <input type="text" value={city} onChange={changeHandlar} /><br />
          <button type="submit">Get Wether Rport</button>
        </form>
        <div>{result.name}
        {result.weather[0]?.description}
        </div>
      </header>
    </div>
  );
}

export default App;
