import React, {useState} from 'react'
import Button from './components/button'
import './App.css';

const App = () => {
  const [display, setDisplay] = useState("");
  
  const handleClick = (text) => {
    setDisplay(display + text);
  }

  return(
    <section>
      <input onChange={(event) => setDisplay(event.target.value)} value={display} />
      <Button val='0' handleClick={(event) => handleClick(event.target.value)}/>
      <Button val='1' handleClick={(event) => handleClick(event.target.value)}/>
    </section>
  );
}
export default App;
