const countryModel = require('../models/countryModel');

const getAllCountries = async (req, res) => {
  try {
    const countries = await countryModel.getAllCountries();
    res.json({ success: true, data: countries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getCountryDetailsByCountryCode = async (req, res) => {
  try {
    const { countryCode } = req.params;
    const countryDetails = await countryModel.getCountryDetailsByCountryCode(
      countryCode,
    );

    res.json(countryDetails);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllCountries,
  getCountryDetailsByCountryCode,
};
