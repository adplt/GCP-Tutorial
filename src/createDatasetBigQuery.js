const BigQuery = require('@google-cloud/bigquery');
const {POST} = require('./utils/http.util');
const createDatasetJSON = require('./fixtures/createDataset.fixture');

const bigQuery = new BigQuery({
  projectId: 'training-202005',
  keyFilename: './src/Training.json'
});

const response = POST(
  'www.googleapis.com',
  '/bigquery/v2/projects/training-202005/datasets?key=',
  createDatasetJSON
);

console.log('response: ', response);

/* or it can be simply by call dataset API likes above */

module.exports = bigQuery.createDataset('eVoucher_airline').
  then((results) => {
    const dataset = results[0];
    console.log(`Dataset ${dataset.id} created.`);
  }).catch((err) => {
    console.error('error:', err);
  });
