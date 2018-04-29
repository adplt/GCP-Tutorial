const BigQuery = require('@google-cloud/bigquery');

const bigquery = new BigQuery({
  projectId: 'training-202005',
  keyFilename: './Training.json'
});

bigquery
  .createDataset('eVoucher_airline')
    .then((results) => {
      const dataset = results[0];
      log
      console.log(`Dataset ${dataset.id} created.`);
    })
    .catch((err) => {
      console.error('error:', err);
    });
