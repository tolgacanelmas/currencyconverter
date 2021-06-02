import { useEffect, useState } from 'react'
import Currency from './components/Currency'
import Converter from './components/Converter'
function App() {
  const [data, setData] = useState(null)
  const [price, setPrice] = useState(null)
  const explanation = [{ "USD": "Amerikan Doları" }, { "EUR": "Avrupa Para Birimi" }, { "JPY": "Japon Yeni" }, { "GBP": "İngiliz Sterlini" },
  { "DKK": "Danimarka Kronu" }, { "NOK": "Norveç Kronu" }]

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await fetch(`http://api.exchangeratesapi.io/v1/2021-06-02?access_key=19d60e349f6e05160fe1f27cb4842df2&base=EUR&symbols=TRY,USD,GBP,DKK,NOK,JPY,EUR`);
    const result = await response.json();
    setData(result)
  }

  if (data == null) return null

  const objectArray = Object.entries(data.rates);
  objectArray.map(([name, price]) => {
    const tryPrice = data.rates.TRY / price
    console.log(name)
    console.log(tryPrice)
    const obj = {}
    obj.name = name
    obj.price = tryPrice
    console.log(obj)
  })
  return (
    <div className="app">
      <h1>Piyasalar</h1>
      <div className="currency-wrapper">
        <div className="currency-container row">
          {
            objectArray.map(([key, value]) => {
              return (
                <Currency name={key} currency={value} base={data.base} />
              )
            })
          }
        </div>
        <div className="converter-container">
          <Converter />
        </div>
      </div>
    </div>
  );
}

export default App;
