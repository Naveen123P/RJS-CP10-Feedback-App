import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    countryName: countryAndCapitalsList[0].capitalDisplayText,
  }

  changeCountry = event => {
    this.setState({countryName: event.target.value})
  }

  changeCapital = () => {
    const {countryName} = this.state
    console.log(countryName)
    const theCapitalIs = countryAndCapitalsList.filter(
      each => each.capitalDisplayText === countryName,
    )
    return theCapitalIs[0]
  }

  render() {
    const theCapitalIs = this.changeCapital()
    return (
      <div className="bg-container1">
        <div className="bg-container2">
          <h1>Countries And Capitals</h1>
          <select
            className="form-control"
            id="countries"
            onChange={this.changeCountry}
          >
            {countryAndCapitalsList.map(eachCountry => (
              <option value={eachCountry.id} key={eachCountry.id}>
                {eachCountry.capitalDisplayText}
              </option>
            ))}
          </select>
          <p>is capital of which country?</p>
          <p>{theCapitalIs.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
