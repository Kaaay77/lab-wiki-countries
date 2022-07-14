// eslint-disable-next-line 
import { Link } from 'react-router-dom';


export default function CountriesList(props) {
    const {countriesData} = props
    return (
        <>

         {countriesData.map((country) => {

            return (
                <ul className='list'>
                <Link className='list' to={`/country/${country.alpha3Code}`}> {country.name.common}</Link>
                </ul>
                
                
            )
        })}
        </>
        
        )
}