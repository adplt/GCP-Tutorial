/* Call API using fetch from javascript only */

const https = require('https');

const fetchData = (options) => https.request(options, (res) => {
  res.setEncoding('utf8');
  res.on('data', (data) => data);
}).end();

module.exports = {
  GET: (url, path, headers) => {
    const options = {
      host: url,
      port: 443,
      path: path,
      method: 'GET',
      ...headers,
    };
    return fetchData(options);
  },
  POST: (url, path, body, headers) => {
    const options = {
      host: url,
      port: 443,
      path: path,
      method: 'POST',
      ...headers,
    };
    return fetchData(options);
  }
}

/* AJAX Call API Example */
/****************************************/
// const xhttp = new window.XMLHttpRequest();
// xhttp.open('POST', url, true);
// xhttp.setRequestHeader('Content-type', 'application/json');
// xhttp.send();
// return JSON.parse(xhttp.responseText);
/****************************************/
