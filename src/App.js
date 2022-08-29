import logo from './logo.svg';
import './App.css';
import UseReducer from './UseReducer/UseReducer';
import {useSelector,useDispatch}from 'react-redux'
import {decrement,increment} from '../src/Redux/Actions/Action.jsx'

function App() {
  const myState = useSelector((state)=> state.changeNumber)
  const dispatch = useDispatch()
  return (
    <div className="App">
      {/* <UseReducer/> */}
      <h3 style={{ color: "skyblue", fontSize: "50px" }}>Welcome To Redux</h3>
      <h3>{myState}</h3>
      <div>
        <button onClick={()=>{dispatch(increment())}}>
          Increment
        </button>
        <button onClick={()=>{dispatch(decrement())}}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
