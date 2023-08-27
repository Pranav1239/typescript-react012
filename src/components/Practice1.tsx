import React from 'react'

interface IBtnProps { //adding interface
    text : string;
    onClick? : ()=>void
}
const Button1 : React.FC<IBtnProps> = (props)=>{
    return <button className='btn btn-primary' onClick={props.onClick}>{props.text}</button>
}

export default Button1