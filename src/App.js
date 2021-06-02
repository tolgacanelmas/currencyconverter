import { useEffect, useState } from "react";
import Currency from "./components/Currency";
import Converter from "./components/Converter";

const getDate = () => {
  let year = new Date().getFullYear()
  let month = new Date().getMonth() + 1
  let day = new Date().getDate()
  if (day < 10) {
    day = "0" + day
  }
  if (month < 10) {
    month = "0" + month
  }
  return `${year}-${month}-${day}`
}

function App() {
  const [data, setData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      const explanation = [
        { name: "USD", exp: "Amerikan Doları", img: "/images/flag-1.png" },
        { name: "EUR", exp: "Avrupa Para Birimi", img: "/images/flag-2.png" },
        { name: "JPY", exp: "Japon Yeni", img: "/images/flag-3.png" },
        { name: "GBP", exp: "İngiliz Sterlini", img: "/images/flag-4.png" },
        { name: "DKK", exp: "Danimarka Kronu", img: "/images/flag-5.png" },
        { name: "NOK", exp: "Norveç Kronu", img: "/images/flag-6.png" },
      ];
      const date = getDate()
      const response = await fetch(
        `http://api.exchangeratesapi.io/v1/${date}?access_key=f5a4259c77929dda9ef0cd5ec0492085&base=EUR&symbols=TRY,USD,GBP,DKK,NOK,JPY,EUR`
      );
      const result = await response.json();
      const ratesArray = Object.entries(result.rates);
      const currencies = ratesArray.map(([name, price]) => {
        const tryPrice = result.rates.TRY / price;
        const obj = {};
        obj.name = name;
        obj.price = tryPrice;
        return obj
      });

      for (let i = 0; i < currencies.length; i++) {
        explanation.forEach(exp => {
          if (exp.name === currencies[i].name) {
            currencies[i].exp = exp.exp
            currencies[i].img = exp.img
          }
        })
      }

      currencies.splice(0, 1)
      setData(currencies);
    };
    setInterval(() => {
      fetchData();
    }, 1000 * 60);
    fetchData();
  }, []);

  if (data === null) return null;

  return (
    <div className="app">
      <h1>Piyasalar</h1>
      <div className="currency-wrapper">
        <div className="currency-container">
          {data.map((currency, i) => {
            return <Currency currency={currency} key={i} />;
          })}
        </div>
        <div className="converter-container">
          <Converter currencies={data} />
        </div>
      </div>
      <div className="info-buttons">
        <button>
          <span>Detaylı Bilgi</span>
        </button>
        <button className="show-all">
          <span>Tüm Piyasalar</span>
          <img src={"/images/icon.png"}/>
        </button>
      </div>
    </div>
  );
}
export default App;
