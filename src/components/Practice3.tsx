import React, { useState } from "react";

const Input1 = ()=> {
    const [value , SetValue] = useState<string>() //setting the string

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        SetValue(e.target.value)
    }
    return(
        <>
        <input type="text" onChange={HandleChange} />
        <h1>{value}</h1>
        </>
    )
} 

export default Input1;