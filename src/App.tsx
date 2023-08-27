import React from 'react'
import Button1 from './components/Practice1'
import StateBtn from './components/Practice2';
import Input1 from './components/Practice3';

function App() {
  const TestAlert = ()=>{
      alert("AlertCLicked")
      console.log("AlertClicked");
  }
  return (
    <>
    <div className="container">
    <Button1 onClick={TestAlert} text="Hello"/>
    </div>
    <br />
    <div className="container">
    <StateBtn />
      </div>
      <br />
      <div className="container">
      <Input1/>
      </div>
    </>
  )
}

export default App