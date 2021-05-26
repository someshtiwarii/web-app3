import React, { useState } from "react";
import "./styles.css";

/**
 * concept notes: styling in react
 */

/**
 * concept of hashmap (object as hashmap)
 * O(1) and why we are doing this.
 */

const emojiDictionary = {
  "🕉️": "Om",
  "☸️": "Wheel of Dharma",
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "🙈": "See-No-Evil Monkey",
  "🙉": "Hear-No-Evil Monkey",
  "🙊": "Speak-No-Evil Monkey",
  "😦": "Frowning Face with Open Mouth",
  "😧": "Anguished Face",
  "😨": "Fearful Face",
  "😰": "Anxious Face with Sweat",
  "😥": "Sad but Relieved Face",
  "😢": "Crying Face",
  "😭": "Loudly Crying Face",
  "😱": "Face Screaming in Fear",
  "😖": "Confounded Face",
  "😣": "Persevering Face",
  "😞": "Disappointed Face",
  "😓": "Downcast Face with Sweat",
  "😩": "Weary Face",
  "😫": "Tired Face"
  /** add some more to show how the app now expands when there's new data */
};

/**
 * Bonus feature
 * converting an object to array of keys
 */
const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState(""); /** concept 2 is useState */
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failed to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    /** concept 3 is onchange */
    <div className="App">
      <h1>
        <span>🤔 Smiley </span>Interpreter 📙
      </h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2> {/** Concept 1: JSX */}
      <h3> {meaning} </h3> {/** how much part is re-rendered. */}
      {
        /** Bonus feature; if time permmits */
        
        emojis.map((emoji) => (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "0.5rem",
              cursor: "pointer",
              color: "#5b21b6"
            }}
          >
            {" "}
            {emoji}{" "}
          </span>
        ))
      }
    </div>
  );
}
