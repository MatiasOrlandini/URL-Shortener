import { useState } from "react";
import InputShortener from "./components/InputShortener.js";
import BackgroundAnimate from "./components/BackgroundAnimate.js";
import LinkResult from "./components/LinkResult.js";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} />
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
