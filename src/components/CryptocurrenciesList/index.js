import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptoCurrenciesList extends Component {
  initalRender = () => (
    <div>
      <p>Coin Type</p>
      <p>USD</p>
      <p>EURO</p>
    </div>
  )

  render() {
    const {details} = this.props
    return (
      <div>
        <h1>CryptoCurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        {this.initalRender()}
        {details.map(data => (
          <CryptocurrencyItem details={data} key={data.id} />
        ))}
      </div>
    )
  }
}
export default CryptoCurrenciesList
