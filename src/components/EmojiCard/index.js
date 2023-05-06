// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {eachCard, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = eachCard

  const clickEmoji = id => {
    onClickEmoji(id)
  }

  return (
    <div>
      <img src={emojiUrl} className="emoji-image" onClick={clickEmoji} />
    </div>
  )
}

export default EmojiCard
