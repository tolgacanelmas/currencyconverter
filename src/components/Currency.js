import React from 'react'
import '../styles/scss/converter.css'

const Currency = ({ currency , i}) => {
    if (currency.price === 1) return null

    const convertedMoney = currency.price.toFixed(4)

    return (
        <div className="currency" key={i}>
            <div className="currency-inner">
                <div className="currency-img">
                    <img src={currency.img} alt=""/>
                </div>
                <div className="currency-title">
                    <span>{currency.name}</span>
                    <span>{currency.exp}</span>
                </div>
                <div className="currency-buy">
                    <span>ALIŞ</span>
                    <span>{convertedMoney}</span>
                </div>
                <div className="currency-sell">
                    <span>SATIŞ</span>
                    <span>{convertedMoney}</span>
                </div>
            </div>

        </div>
    )
}

export default Currency