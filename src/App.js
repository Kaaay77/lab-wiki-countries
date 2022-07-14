import './App.css';
import Navbar from "./components/Navbar"
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import countriesData from "./countries.json"
import { useEffect, useState } from 'react';

import { Routes, Route } from 'react-router-dom';

// const apiURL = 'https://ih-countries-api.herokuapp.com/countries';
function App() {
// const [fetching, setFetching] = useState()
//   useEffect(function () {
//     fetch(apiURL)
//     .then(res => res.json())
//     .then(response => {
//       setFetching(response)
      
//     })
// .catch((e) => console.log(e))
//   }, [])

  return (
    <div className="App">
    

        <Navbar />
        <div className='container App-header'>
        <div >
         <CountriesList countriesData={countriesData} />

        </div>
         <Routes>
          <Route path="/country/:alpha3Code" element={<CountryDetails  countriesData={countriesData} />} />         
         </Routes>
        </div>
    </div>
  );
}

export default App;
