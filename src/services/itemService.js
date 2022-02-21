export const itemService = {
  query,
};

const axios = require('axios');
const DATA_URL = 'http://localhost:3000/items';

async function query(viewBy = 'null') {
  const res = await axios.get(`${DATA_URL}/${viewBy}`);
  const data = await res.data;
  return data;
}
