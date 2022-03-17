import './index.css'

import {Component} from 'react'

class ReviewsCarousel extends Component {

//   state = {idNum: reviewsList[0]}

  const reviewsList = props


  render() {
    return (
      <div className="totalBG">
        <h1 className="heading">Reviews</h1>
        <img
          className="imgCss"
          src="https://assets.ccbp.in/frontend/react-js/wade-warren-img.png"
        />
        <div className="arrowsContainer">
          <button type="button" className="buttons">
            <img
              className="arrowImg"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <p className="paraName">Wade Warren</p>
          <button type="button" className="buttons">
            <img
              className="arrowImg"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
        <p>Rang</p>
        <p className="belowPara">
          The most important thing | learnt is that nothing is a failure, but
          what we learn from that is a rich and rewarding experience.
        </p>
      </div>
    )
  }
}

export default ReviewsCarousel
