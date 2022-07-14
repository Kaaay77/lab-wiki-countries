import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import countriesData from "../countries.json"


export default function CountryDetails() {
 const [foundCountry, setFoundCountry] = useState()

 const params = useParams();
 const alpha3Code = params.alpha3Code;
 useEffect(() => {
 const country = countriesData.find((pais) => {

    return pais.alpha3Code === alpha3Code
 });
 if(country){
    setFoundCountry(country)
 }
  }, [alpha3Code])

    return(
        <div>{foundCountry && <>
            <h1>Country Details</h1>
            <div className="position">
        <p>{foundCountry.name.common}</p>
        <p>{foundCountry.name.official}</p>

            </div>


        </>
        }
        </div>
            
        
    )
}