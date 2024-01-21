import React from 'react';
import {useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [message ,setmessage] = useState("")
  const handleChange = event => {
    setmessage(event.target.value);
  };
  const handleClick = () => {
    // 👇️ clear input value
    setmessage('');
  };
  return (
    <div className="container">
       <div className='text'>
         <h1>Inpuxt Text Field</h1>
       </div>
       <div className='text-field'>
        <input type='text' placeholder='enter text' onChange={handleChange}
        value={message} />  
       <button onClick={handleClick}>Cear Field</button>      
       </div>
       
    </div>
  );
}

export default App;
