import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { fetchCountryInfo } from '../services/api';
import { fetchThreeCharCode } from '../utils/convertTwoCharCodeInThreeCharCode';
import Loading from '../components/Loading';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import styles from './CountryDetailsPage.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const CountryDetailsPage = () => {
  const { countryCode, countryName } = useParams();
  const [countryThreeCharCode, setCountryThreeCharCode] = React.useState(null);
  const [countryInfo, setCountryInfo] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const getThreeCharCode = async () => {
      try {
        const threeCharCode = await fetchThreeCharCode(countryCode);
        setCountryThreeCharCode(threeCharCode);
      } catch (err) {
        console.error('Error fetching three-character code:', err);
        setError('Could not fetch three-character code.');
      }
    };

    getThreeCharCode();
  }, [countryCode]);

  React.useEffect(() => {
    const getCountryInfo = async () => {
      if (!countryThreeCharCode) return;

      setLoading(true);
      try {
        const info = await fetchCountryInfo(countryThreeCharCode);
        setCountryInfo(info);
      } catch (err) {
        console.error('Error fetching country info:', err);
        setError('Could not fetch country details.');
      } finally {
        setLoading(false);
      }
    };

    getCountryInfo();
  }, [countryThreeCharCode]);

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  const populationData =
    countryInfo.populationData?.populationCounts?.map((item) => ({
      year: item.year,
      value: item.value,
    })) || [];

  const data = {
    labels: populationData.map((item) => item.year),
    datasets: [
      {
        label: 'Population',
        data: populationData.map((item) => item.value),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Population Over Time - ${countryName}`,
      },
    },
  };

  return (
    <>
      <header className={styles.header}>
        <h1>{countryName}</h1>
        {countryInfo.flagImage && (
          <img
            src={countryInfo.flagImage}
            alt={`Flag of ${countryInfo.name}`}
          />
        )}
      </header>
      <section className={styles.section}>
        <article className={`${styles.article} ${styles.neighboringCountries}`}>
          <h2>Neighboring countries:</h2>
          <ul>
            {countryInfo.borderCountries &&
            countryInfo.borderCountries.length > 0 ? (
              countryInfo.borderCountries.map((borderCountry) => (
                <li key={borderCountry.countryCode}>
                  <Link
                    to={`/country-details/${borderCountry.countryCode}/${borderCountry.commonName}`}
                  >
                    {borderCountry.commonName}
                  </Link>
                </li>
              ))
            ) : (
              <li>We were unable to get this information</li>
            )}
          </ul>
        </article>
        <article className={`${styles.article} ${styles.populationChart}`}>
          <h2>Population Chart:</h2>
          <div style={{ position: 'relative', minHeight: '300px' }}>
            {populationData.length > 0 ? (
              <Line data={data} options={options} />
            ) : (
              <p>We were unable to get this information</p>
            )}
          </div>
        </article>
      </section>
    </>
  );
};

export default CountryDetailsPage;
