import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {tharun: true, heads: 0, tails: 0, total: 0}

  onclick = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 1) {
      this.setState({tharun: false})
      this.setState(prevState => ({tails: prevState.tails + 1}))
    } else {
      this.setState({tharun: true})
      this.setState(prevState => ({heads: prevState.heads + 1}))
    }
    this.setState(prevState => ({total: prevState.heads + prevState.tails}))
  }

  render() {
    const {tharun, heads, tails, total} = this.state
    console.log(heads)
    return (
      <div className="container1">
        <div className="container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          {tharun ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
            />
          )}
          <button type="button" onClick={this.onclick}>
            Toss Coins
          </button>
          <div className="coinsContainer">
            <p className="para">Total:{total}</p>
            <p className="para">Heads:{heads}</p>
            <p className="para">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
