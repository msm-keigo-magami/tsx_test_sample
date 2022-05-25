import * as React from "react";

type Props = {
    name: string
    initNumber?: number;
}

const counter: React.FunctionComponent<Props> = (props) => {

    const initNumber = props.initNumber ?? 0;
    const [count, setCount] = React.useState<number>(initNumber);
    const increase = () => setCount(count + 1)
    const decrease = () => setCount(count - 1)

    return (
        <div>
            <p className="dispCount">{props.name}:{count}</p>
            <button name={`${props.name}_increase`} onClick={increase}>+</button>
            <button name={`${props.name}_decrease`} onClick={decrease}>-</button>
        </div>
    )
}

export default counter;