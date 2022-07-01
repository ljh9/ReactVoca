import './App.css';
import Day from './component/Day';
import DayList from './component/DayList';
// import Hello from "./component/Hello";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      {/* <h3>props : properties</h3>
      <Hello age={10} />
      <Hello age={20} />
      <Hello age={30} /> */}
      <Header/>
      <DayList/>
      <Day/>

    </div>
  );
}

export default App;
