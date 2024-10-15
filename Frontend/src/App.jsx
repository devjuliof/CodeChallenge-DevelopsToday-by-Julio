import { Routes, Route } from 'react-router-dom';
import CountryListPage from './Pages/CountryListPage';
import CountryDetailsPage from './Pages/CountryDetailsPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CountryListPage />} />
        <Route
          path="/country-details/:countryCode/:countryName"
          element={<CountryDetailsPage />}
        />
      </Routes>
    </>
  );
}

export default App;
