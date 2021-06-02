import React from 'react'
import './converter.css'

const Currency = ({ name, currency, base }) => {
    if (currency == 1) return null


    return (
        <div className="currency col-xl-12 col-xxl-6 col-sm-12" key={name}>
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
                    <span>{currency}</span>
                </div>
                <div className="currency-sell">
                    <span>SATIŞ</span>
                    <span>{currency}</span>
                </div>
            </div>

        </div>
    )
}

export default Currency