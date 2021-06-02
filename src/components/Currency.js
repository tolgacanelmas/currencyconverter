import React from 'react'
import '../styles/scss/converter.css'

const Currency = ({ name, currency, base }) => {
    if (currency == 1) return null

    const digit = currency.toString().split(".")[0]
    const float = currency.toString().split(".")[1]
    const fourFloat = float.substring(0,4)

    return (
        <div className="currency" key={name}>
            <div className="currency-inner">
                <div className="currency-img">
                    <img src={window.location.origin + '/images/flag-1.png'} />
                </div>
                <div className="currency-title">
                    <span>{name}</span>
                    <span>Amerikan Doları</span>
                </div>
                <div className="currency-buy">
                    <span>ALIŞ</span>
                    <span>{digit + "." + fourFloat}</span>
                </div>
                <div className="currency-sell">
                    <span>SATIŞ</span>
                    <span>{digit + "." + fourFloat}</span>
                </div>
            </div>

        </div>
    )
}

export default Currency