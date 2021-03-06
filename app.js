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
  "ποΈ": "Om",
  "βΈοΈ": "Wheel of Dharma",
  "π": "Smiling",
  "π³": "disbelief",
  "π": "sad",
  "π₯‘": "takeout box",
  "β€οΈ": "love",
  "π": "annoyance",
  "π": "See-No-Evil Monkey",
  "π": "Hear-No-Evil Monkey",
  "π": "Speak-No-Evil Monkey",
  "π¦": "Frowning Face with Open Mouth",
  "π§": "Anguished Face",
  "π¨": "Fearful Face",
  "π°": "Anxious Face with Sweat",
  "π₯": "Sad but Relieved Face",
  "π’": "Crying Face",
  "π­": "Loudly Crying Face",
  "π±": "Face Screaming in Fear",
  "π": "Confounded Face",
  "π£": "Persevering Face",
  "π": "Disappointed Face",
  "π": "Downcast Face with Sweat",
  "π©": "Weary Face",
  "π«": "Tired Face"
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
        <span>π€ Smiley </span>Interpreter π
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
