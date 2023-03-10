import {memo} from "react";

import {Child2} from "./Child2";
import {Child3} from "./Child3";

const style = {
    height:"200px",
    backgroundColor:"tightblue",
    padding:"8px"
}

export const Child1 = memo((props) => {
    console.log("Child1レンダリング");

    //propsから関数を展開
    const {onClickReset} = props;

    return (
        <div style={style}>
            <p>Child1</p>
            <button onClick={onClickReset}>リセット</button>
            <Child2 />
            <Child3 />
        </div>
    );
});