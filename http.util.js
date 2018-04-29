/* Call API using fetch from javascript only */

const fetchData = (url, config) => fetch(url, config).
  then(parseJson).then((response) => {
    const {status} = response;
    if (status >= 200 && status < 300) {
      return response;
    } else if (status === 400) {
      throw response;
    }
    throw response;
  });

export const GET = (path, headers) => {
  const url = '';
  const config = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      mode: 'no-cors',
      'Content-Type': 'application/json',
      ...headers,
    },
  };
  return fetchData(url, config);
};

export const POST = (path, body, headers) => {
  const url = '';
  const config = {
    method: 'POST',
    credentials: 'include',
    withCredentials: true,
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
  };
  return fetchData(url, config);
};
