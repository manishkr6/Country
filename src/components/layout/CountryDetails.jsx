import React, { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import Loader from "../UI/Loader";
import { getCountryIndData } from "../../api/postApi";

const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [county, setCountry] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id);
      setCountry(res.data);
      console.log(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  console.log(params);

  return <div>CountryDetails</div>;
};

export default CountryDetails;
