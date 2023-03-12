import {useState, memo, useCallback} from "react";
import {Child1} from "./components/Child1";
import {Child4} from "./components/Child4";


export const App = memo(() => {
    console.log("Appレンダリング");

    const [num,setNum] = useState(0);

    //最初だけ関数を生成する
    const onClickReset = useCallback(() => {
        setNum(0);
    }, []);

    const onClickButton = () => {
        setNum(num + 1);
    }

    return (
        <>
            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>
            <Child1 onClickReset={onClickReset} />
            <Child4 />
        </>
    )

});