import 'core-js/stable';
import 'regenerator-runtime/runtime';
import axios from 'axios';

const getPollen = async (postcodeFirstHalf) => {
  const { data: weather } = await axios.get(
    `https://weather-broker-cdn.api.bbci.co.uk/en/forecast/aggregated/${postcodeFirstHalf}`
  );
  const { pollenIndex, pollenIndexBand, pollenIndexText, pollenIndexIconText } = weather.forecasts[0].summary.report;
  return { pollenIndex, pollenIndexBand, pollenIndexText, pollenIndexIconText };
};

exports.handler = async (event) => {
  try {
    console.log('Pollen Lambda triggered');

    const pollen = await getPollen('SO31');

    return {
      statusCode: 200,
      body: JSON.stringify(pollen),
    };
  } catch (error) {
    const body = error.stack || JSON.stringify(error, null, 2);
    return {
      statusCode: 400,
      body: JSON.stringify(body),
    };
  }
};
