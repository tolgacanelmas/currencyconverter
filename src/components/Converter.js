import { useEffect, useState } from 'react'
import '../styles/scss/converter.css'

const Converter = ({ currencies }) => {
    const money = currencies[0].price.toFixed(4)
    const [price, setPrice] = useState(money)
    const [convertedMoney, setConvertedMoney] = useState(1)
    const [selectedMoney, setSelectedMoney] = useState("USD")

    useEffect(() => {
        currencies.forEach((currency) => {
            if (currency.name === selectedMoney) {
                const resultMoney = currency.price * convertedMoney
                const convertedResultMoney = resultMoney.toFixed(4)
                setPrice(convertedResultMoney)
            }
        })
        if (convertedMoney.length === 0) {
            setConvertedMoney("")
            setPrice("")
        }
    }, [convertedMoney, currencies, selectedMoney])

    useEffect(() => {
        currencies.forEach((currency) => {
            if (currency.name === selectedMoney) {
                const resultMoney = currency.price * convertedMoney
                const convertedResultMoney = resultMoney.toFixed(4)
                setPrice(convertedResultMoney)
            }
        })
    }, [selectedMoney, currencies, convertedMoney])

    const handleChangePrice = (e) => {
        const value = e.target.value
        setConvertedMoney(value)
    }

    const handleChangeSelect = (e) => {
        const value = e.target.value
        setSelectedMoney(value)
    }

    return (
        <div>
            <h3>Döviz Çevir</h3>
            <div className="converting-currency">
                <input type="text" value={convertedMoney} onChange={handleChangePrice} />
                <select onChange={handleChangeSelect} value={selectedMoney}>
                    {
                        currencies.map((currency, i) => {
                            return (
                                <option key={i}>{currency.name}</option>
                            )
                        })
                    }
                </select>
            </div>
            <img src={'/images/converter.png'} alt=""/>
            <div className="converted-price">
                <div>{price}</div>
                <span>TL</span>
            </div>
        </div>
    )
}

export default Converter