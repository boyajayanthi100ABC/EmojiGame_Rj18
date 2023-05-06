/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

class EmojiGame extends Component {
  state = {TopScore: 0, listItems: [], gameStatus: true}

  resetGame = () => {
    this.setState({listItems: [], gameStatus: true})
  }

  scoreCardDisplay = () => {
    const {listItems} = this.state
    const isWon = listItems.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        score={listItems.length}
        onClickPlayAgain={this.resetGame}
      />
    )
  }

  setTopScore = clickedEmojisLength => {
    const {TopScore} = this.state
    let updatedScore = TopScore

    if (clickedEmojisLength > updatedScore) {
      updatedScore = clickedEmojisLength
    }

    this.setState({TopScore: updatedScore, gameStatus: false})
  }

  onClickEmoji = id => {
    const {listItems} = this.state
    const isEmojiClicked = listItems.includes(id)
    const clickedEmojisLength = listItems.length

    if (isEmojiClicked) {
      this.seTopScore(clickedEmojisLength)
    } else {
      if (clickedEmojisLength === emojisList.length - 1) {
        this.setTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        listItems: [...prevState.listItems, id],
      }))
    }
  }

  shuffledEmojisList = () => emojisList.sort(() => Math.random() - 0.5)

  emojisListDisplay = () => {
    const shuffledEmojisList = this.shuffledEmojisList()

    return (
      <ul className="colour-container">
        {shuffledEmojisList.map(each => (
          <EmojiCard
            key={each.id}
            eachCard={each}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {TopScore, listItems, gameStatus} = this.state

    return (
      <div className="main-container">
        <div>
          <NavBar
            topScoreProp={{TopScore}}
            gameStatus={gameStatus}
            updatedScore={listItems.length}
          />
        </div>
        <div className="images-container">
          {gameStatus ? this.emojisListDisplay() : this.scoreCardDisplay()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
