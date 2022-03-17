import './index.css'

import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {idNum: 0}

  leftClick = () => {
    const {idNum} = this.state
    if (idNum > 0) {
      this.setState(prevValuve => ({idNum: prevValuve.idNum - 1}))
    }
  }

  rightClick = () => {
    const {idNum} = this.state
    if (idNum < 3) {
      this.setState(prevValuve => ({idNum: prevValuve.idNum + 1}))
    }
  }

  render() {
    const {idNum} = this.state
    const {reviewsList} = this.props
    const reviewmem = reviewsList[idNum]
    const {imgUrl, username, companyName, description} = reviewmem
    return (
      <div className="totalBG">
        <h1 className="heading">Reviews</h1>
        <img className="imgCss" src={imgUrl} alt={username} />
        <div className="arrowsContainer">
          <button
            type="button"
            className="buttons"
            onClick={this.leftClick}
            testid="leftArrow"
          >
            <img
              className="arrowImg"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <p className="paraName">{username}</p>
          <button
            type="button"
            className="buttons"
            onClick={this.rightClick}
            testid="rightArrow"
          >
            <img
              className="arrowImg"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
        <p>{companyName}</p>
        <p className="belowPara">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
