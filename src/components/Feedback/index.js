import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isGiven: false}

  feedbackGiven = () => {
    this.setState(pervState => ({isGiven: !pervState.isGiven}))
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isGiven} = this.state
    console.log(isGiven)

    return (
      <div className="bg-container1">
        <div className={`bg-container2 ${''}`}>
          <h1 className="heading">
            How satisfied are you with our customer support performance
          </h1>
          <ul className="emoji-container">
            {emojis.map(each => (
              <li key={each.id} className="emoji-list">
                <button
                  className="button"
                  type="button"
                  onClick={this.feedbackGiven}
                  key={each.id}
                >
                  <img
                    src={each.imageUrl}
                    alt={each.name}
                    className="emoji-img"
                  />
                  <p className="eomji-name">{each.name}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className={`bg-container2 ${''}`}>
          <img src={loveEmojiUrl} alt="love emoji" className="love-img" />
          <h1 className="heading">Thank you!</h1>
          <p className="bottom-text">
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      </div>
    )
  }
}

export default Feedback
