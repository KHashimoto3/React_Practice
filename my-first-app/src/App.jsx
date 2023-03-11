import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";
import { TailwindCss } from "./components/TailwindCss";

export const App = () => {
  console.log("再レンダリング");
  //stateの定義
  const [num, setNum] = useState(0);

  //ボタンを押した時にstateをカウントアップ
  const onClickButton = () => {
    setNum((prev) => prev + 1);
  }

  return (
    <>
      <h1 style={{color:"red"}}>こんにちは！</h1>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <hr></hr>
      <CssModules />
      <hr></hr>
      <StyledJsx />
      <hr></hr>
      <StyledComponents />
      <hr></hr>
      <Emotion />
      <hr></hr>
      <TailwindCss />
    </>
  );
};
