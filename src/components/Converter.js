import '../styles/scss/converter.css'


const Converter = () => {
    return (
        <div>
            <h3>Döviz Çevir</h3>
            <div className="converting-currency">
                <input type="text" />
                <select>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>JPY</option>
                </select>
            </div>
            <img src={window.location.origin + '/images/converter.png'} />
            <div className="converted-price">
                <div>6.769.454</div>
                <span>TL</span>
            </div>
        </div>
    )
}

export default Converter