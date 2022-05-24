import * as React from "react";

type Props = {
    text: string;
}

const paragraph:  React.FunctionComponent<Props> = (props) => (<p>{props.text}</p>);
export default paragraph;