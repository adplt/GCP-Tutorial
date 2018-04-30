const Storage = require('@google-cloud/storage');

const storage = new Storage({
  keyFilename: './Training.json'
});

storage
  .getBuckets()
  .then((results) => {
    const buckets = results[0];

    console.log('Buckets:');
    buckets.forEach((bucket) => {
      console.log(bucket.name);
    });
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });
