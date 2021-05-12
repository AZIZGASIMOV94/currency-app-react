import React, { useEffect, useState } from "react";

const Home = () => {

  const [rates, setRates] = useState([]);
  const [baseCurr, setBaseCurr] = useState(0);

  let responseData;

  useEffect(() => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        responseData = JSON.parse(this.responseText);
        console.log(responseData);
        setBaseCurr(responseData.base);
        setRates(responseData.rates);
        console.log(responseData.rates);
      }
    };
    xhttp.open("GET", "https://api.ratesapi.io/api/latest", true);
    xhttp.send();
  }, []);


  return (
    <div>
      <div className="shadow-2xl border-l-r-t-b-4 text-4xl border-fuchsia-600 rounded-2xl p-3">
        {" "}
        Base Rate: {baseCurr}{" "}
      </div>

      <div className="pt-4 shadow-2xl border-l-r-t-b-4 text-2xl border-fuchsia-600 rounded-b-2xl p-3">
        <ul>
          <li className="pt-2 p-3">Turkish Lira: {rates.TRY}</li>
          <li className=" pt-2 p-3">British Pound: {rates.GBP}</li>
          <li className="pt-2 p-3">Russian Ruble: {rates.RUB}</li>
          <li className="pt-2 p-3">Israeli Shekel: {rates.SEK}</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
