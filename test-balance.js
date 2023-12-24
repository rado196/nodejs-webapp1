const path = require('node:path');
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');

dotenvExpand.expand(
  dotenv.config({
    path: path.join(__dirname, '.env'),
  })
);

const axios = require('axios');

const maxRequests = 10_000;
const userId = 1;

async function makeRequest() {
  return axios.put(
    `http://127.0.0.1:${process.env.NODE_PORT}/users/${userId}/balance/decrement`,
    {
      amount: 2,
    }
  );
}

(async function () {
  for (let i = 1; i <= maxRequests; ++i) {
    try {
      const response = await makeRequest();
      if (response.status === 200) {
        console.log('>>> success', i);
      } else {
        console.log('>>> failure', i);
      }
    } catch (e) {
      console.log('>>> failure', i);
    }
  }
})();
