import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [quote,setQuote] = useState("");

  const fetchQuote = ()=>{
    axios.get("https://api.adviceslip.com/advice")
    .then((res)=>{
      const {advice} = res.data.slip;
      setQuote(advice);
      console.log(advice);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div>
      <div className="App">
        {fetchQuote()}
        <div className='quote'>
          {quote}
          <div><button className='btn' onClick={fetchQuote}>Give me a quote</button></div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
