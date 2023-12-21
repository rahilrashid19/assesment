// custom hook created for fetching data from the api

import { useState, useEffect } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);

  const getCropData = async () => {
    const res = await fetch(url);
    const cropData = await res.json();
    setData(cropData);
  };

  useEffect(() => {
    getCropData();
  }, []);
  return data;
};

export default useFetchData;
