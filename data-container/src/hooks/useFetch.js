import { useEffect, useState } from 'react';

export function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const setState = (loading, error, data) => {
    setData(data);
    setError(error);
    setLoading(loading);
  };

  useEffect(() => {
    setState(true, null, null);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setState(false, null, data);
      })
      .catch((error) => {
        setState(false, error, null);
      });
  }, [url]);

  const returnData = {
    data,
    loading,
    error,
  };
  console.log(returnData);

  return returnData;
}
