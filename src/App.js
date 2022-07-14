import './App.css';
import Navbar from "./components/Navbar"
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import countriesData from "./countries.json"

import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
    

        <Navbar />
        <div className='container App-header'>
        <div >
         <CountriesList countriesData={countriesData} />

        </div>
         <Routes>
          <Route path="/country/:alpha3Code" element={<CountryDetails />} />         
         </Routes>
        </div>
    </div>
  );
}

export default App;
