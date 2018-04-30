const BigQuery = require('@google-cloud/bigquery');
const createDatasetJSON = require('./fixtures/createDataset.fixture');

const bigQuery = new BigQuery({
  projectId: 'training-202005',
  keyFilename: './src/Training.json'
});

/* or it can be simply by call dataset API likes above */

/*
Value for schema (must be concate with colon):
  - string
  - boolean
  - integer
  - float
*/

const schema = 'Status:integer, Year:integer';

const options = {
  schema: schema,
};

module.exports = bigQuery.dataset('eVoucher_airline').table('STATUS_DIM').delete().
  then(() => {
    console.log(`Table ${'STATUS_DIM'} deleted.`);
  }).catch((err) => {
    console.error('ERROR:', err);
  });
