import './App.css';
import EventNesting from "./EventNesting.js";
import UserMessage from "./component/UserMessage.js";
import UserData from './component/UserData.js';

function App() {
  return (
    <div className="App">
      <EventNesting/>
      {/* <UserMessage/> */}
      {/* <UserData/> */}
    </div>
  );
}

export default App;
