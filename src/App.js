import { React } from "react";
import { addNumber } from './action'
import './App.css';
import { useDispatch, useSelector } from 'react-redux'

function App(props) {
  const dispatch = useDispatch()
  return (
    <div className="App">
      Test<br />
      <button onClick={() => dispatch(addNumber())}>click</button>
    </div>
  );
}
export default App;
