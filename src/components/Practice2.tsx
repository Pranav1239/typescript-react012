import React, { useState } from "react";

const StateBtn = ()=> {
    const [plus , setPlus] = useState<number>(1)
    return(
        <>
        <h1>{plus}</h1>
        <button className="btn btn-success" onClick={()=>{setPlus(plus + 1)}}>Plus</button>
        </>
    )
} 

export default StateBtn;