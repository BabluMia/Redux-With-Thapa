import logo from './logo.svg';
import './App.css';
import UseReducer from './UseReducer/UseReducer';

function App() {
  return (
    <div className="App">
      {/* <UseReducer/> */}
      <h3 style={{ color: "skyblue", fontSize: "50px" }}>Welcome To Redux</h3>
      <h3>0</h3>
      <div>
        <button >
          Increment
        </button>
        <button >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
