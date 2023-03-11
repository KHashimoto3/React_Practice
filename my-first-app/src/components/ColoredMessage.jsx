export const ColoredMessage = (props) => {
    //propsを分割代入
    const {color,children} = props;

    //CSSオブジェクト（propsを利用）
    const contentStyle={
        color,
        fontSize:"16pt",
        fontWeight:"bold"
    };

    return <p style={contentStyle}>{children}</p>;
}