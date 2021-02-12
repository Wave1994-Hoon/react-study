import React from "react";

/* children 내용 사이에 있는 것들 */
function Wrapper({ children }) {
    const style = {
        border: '2px solid black',
        padding: 16
    };

    return <div style={style}> {children} </div>;
}

export default Wrapper;