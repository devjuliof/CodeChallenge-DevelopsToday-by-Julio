const axios = require('axios');

const getAllCountries = async () => {
  try {
    const { data } = await axios.get(process.env.COUNTRIES_API_URL);
    return data.map((country) => ({
      name: country.name,
      countryCode: country.countryCode,
    }));
  } catch (error) {
    console.error('Error fetching countries: ');
  }
};

const getBorderCountries = async (countryCode) => {
  try {
    const { data } = await axios.get(
      `${process.env.BORDER_COUNTRIES_API_URL}/${countryCode}`,
    );
    return data.borders;
  } catch (error) {
    console.error('Error fetching border countries: ', error.message);
    throw error;
  }
};

const getPopulationData = async (countryCode) => {
  try {
    const { data } = await axios.get(`${process.env.POPULATION_DATA_API_URL}`);
    const countryPopulationOverTheYears = data.data.find(
      (country) => country.code === countryCode,
    );
    return countryPopulationOverTheYears;
  } catch (error) {
    console.error('Error fetching population data: ', error.message);
  }
};

const getFlagImageUrl = async (countryCode) => {
  try {
    const { data } = await axios.get(`${process.env.FLAG_API_URL}`);
    console.log(':::::::::::::::::::::::::<<<<<<<<<<<<<<<<<<<<<<<<<');
    console.log(countryCode);
    const flagData = data.data.find((country) => country.iso3 === countryCode);
    console.log(data.data);
    console.log(flagData);
    const flagUrl = flagData.flag;
    return flagUrl;
  } catch (error) {
    console.error('Error fetching flag image: ', error.message);
  }
};

const getCountryDetailsByCountryCode = async (countryCode) => {
  try {
    const [borderCountries, populationData, flagImage] = await Promise.all([
      getBorderCountries(countryCode),
      getPopulationData(countryCode),
      getFlagImageUrl(countryCode),
    ]);

    const countryDetails = {
      borderCountries,
      populationData,
      flagImage,
    };
    return countryDetails;
  } catch (error) {
    console.error('Error fetching country details: ', error.message);
  }
};

module.exports = {
  getAllCountries,
  getCountryDetailsByCountryCode,
};
