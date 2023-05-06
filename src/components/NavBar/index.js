// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScoreProp} = props
  const {gameStatus, updatedScore} = props

  const {TopScore} = topScoreProp

  return (
    <div className="nav-container">
      <div className="row-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="nav-img"
        />
        <p className="par"> Emoji Game </p>
      </div>
      <div className="row-container">
        <p className="par"> Score: {updatedScore} </p>
        <p className="par"> Top Score: {TopScore} </p>
      </div>
    </div>
  )
}

export default NavBar
