import React from 'react';
import { Link } from 'react-router-dom';
import { fetchAvailableCountries } from '../services/api';
import Loading from '../components/Loading';
import styles from './CountryListPage.module.css';

const CountryListPage = () => {
  const [allCountriesData, setAllCountriesData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchCountries = async () => {
      const responseGetAllCountries = await fetchAvailableCountries();
      setAllCountriesData(responseGetAllCountries.data);
      setLoading(false);
    };

    fetchCountries();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ul className={styles.ul}>
          {allCountriesData.map((country, index) => (
            <li key={index}>
              <Link
                to={`/country-details/${country.countryCode}/${country.name}`}
              >
                <h2>{country.name}</h2>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CountryListPage;
