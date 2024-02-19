// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptoCurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {data: {}, isLoading: false}

  componentDidMount() {
    this.formedData()
  }

  formedData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
      options,
    )
    const responseData = await response.json()
    const updatedData = responseData.map(prevData => ({
      currencyName: prevData.currency_name,
      usdValue: prevData.usd_value,
      euroValue: prevData.euro_value,
      id: prevData.id,
      currencyLogo: prevData.currency_logo,
    }))
    this.setState({data: updatedData, isLoading: true})
  }

  renderLoader = () => (
    <div>
      <Loader
        type="TailSpin"
        color="#00BFFF"
        height={50}
        width={50}
        data-testid="loader"
      />
    </div>
  )

  renderCrypo = () => {
    const {data} = this.state
    return (
      <div>
        <ul>
          <CryptoCurrenciesList details={data} />
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return <div>{isLoading ? this.renderCrypo() : this.renderLoader()}</div>
  }
}

export default CryptocurrencyTracker
