import React, { useState } from "react";

function Counter() {
    const [number, setNumber] = useState(0);
    // const numberState = userState(0);
    // const number = numberState[0];
    // const setNumber = numberState[1];

    const onIncrease = () => {
        setNumber(number + 1);
        // setNumber(prevNumber => prevNumber + 1); 최적화
    }
    const onDecrease = () => {
        setNumber(number - 1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}> + 1</button>
            <button onClick={onDecrease}> - 1 </button>
        </div>
    )
}

export default Counter;
