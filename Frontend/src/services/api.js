export const fetchAvailableCountries = async () => {
  const responseFromFetchAvailableCountries = await fetch(
    `${import.meta.env.VITE_API_URL}/api/countries`,
  );
  return responseFromFetchAvailableCountries.json();
};

export const fetchCountryInfo = async (countryCode) => {
  const responseFromFetchCountryInfo = await fetch(
    `${import.meta.env.VITE_API_URL}/api/countries/${countryCode}`,
  );
  return responseFromFetchCountryInfo.json();
};
