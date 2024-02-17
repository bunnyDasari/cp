// Write your JS code here

const CryptocurrencyItem = props => {
  const {details} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = details
  return (
    <li>
      <div>
        <img src={currencyLogo} alt={currencyName} />
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
