import './converter.css'


const Converter = () => {
    return (
        <div>
            <h3>Döviz Çevir</h3>
            <div>
                <input type="text" />
                <select>
                    <option>USD</option>
                </select>
            </div>
            <div>
                <input type="text" />
                <span>TL</span>
            </div>
        </div>
    )
}

export default Converter