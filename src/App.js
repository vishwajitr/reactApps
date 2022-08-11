import { React } from "react";
import { addNumber, subNumber } from './action'
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import reducer from './reducer'

function App() {
  const dispatch = useDispatch()
  const count = useSelector(state => state.count)

  return (
    <div className="App">
      <div className="app-container">
        <h1>Counter</h1>
        <p>Counter example with React-redux </p>
        <p>value : {count}</p>
        <button onClick={() => dispatch(subNumber(count))}>-</button>
        <span style={{ "margin": 10, "display": "inline-block" }
        }>values</span>
        < button onClick={() => dispatch(addNumber(count))}> +</button >
      </div>
    </div >
  );
}
export default App;
