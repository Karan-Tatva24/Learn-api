import React from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const SWRmethod = () => {
  const {
    data: countries,
    error,
    isvalidating,
  } = useSWR("https://restcountries.com/v2/all", fetcher);

  if (error) return <div>Failed to load</div>;
  if (isvalidating) return <div>Loading...</div>;

  return (
    <div>
      {countries &&
        countries.map((country, index) => (
          <img
            src={country.flags.png}
            alt="flag"
            key={country.name}
            width={100}
          />
        ))}
    </div>
  );
};

export default SWRmethod;
