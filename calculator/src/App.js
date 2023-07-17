import './App.css';
import { useState } from 'react';

const App = () => {
  const [result, setResult] = useState("");
  const clickHandler = (e) => {
    setResult(result.concat(e.target.value))
  }

  const calculateValue = () => {
    const preprocessedResult = result.replace(/\b0+(\d+)/g, '$1');

    const evaluatedValue = eval(preprocessedResult);

    const evaluatedAsString = evaluatedValue.toString();
    setResult(evaluatedAsString);
  }

  const clearHandler = () => {
    setResult("");
  }
  return(
    <div className='calc'>
      <input type='text' placeholder='0' id='answer' value={result}/>
      <input type='button' value='9' className='button' onClick={clickHandler}/>
      <input type='button' value='8' className='button' onClick={clickHandler}/>
      <input type='button' value='7' className='button' onClick={clickHandler}/>
      <input type='button' value='6' className='button' onClick={clickHandler}/>
      <input type='button' value='5' className='button' onClick={clickHandler}/>
      <input type='button' value='4' className='button' onClick={clickHandler}/>
      <input type='button' value='3' className='button' onClick={clickHandler}/>
      <input type='button' value='2' className='button' onClick={clickHandler}/>
      <input type='button' value='1' className='button' onClick={clickHandler}/>
      <input type='button' value='0' className='button' onClick={clickHandler}/>
      <input type='button' value='.' className='button' onClick={clickHandler}/>
      <input type='button' value='+' className='button' onClick={clickHandler}/>
      <input type='button' value='-' className='button' onClick={clickHandler}/>
      <input type='button' value='*' className='button' onClick={clickHandler}/>
      <input type='button' value='/' className='button' onClick={clickHandler}/>
      <input type='button' value='%' className='button' onClick={clickHandler}/>
      <input type='button' value='clear' className='button button1' onClick={clearHandler}/>
      <input type='button' value='=' className='button button1' onClick={calculateValue}/>
    </div>
  )
}

export default App;
