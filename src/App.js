import logo from './logo.svg';
import './App.css';
import HOC from './Component/HOC';
import { UserContext } from './Component/UserContext';
import Greetings from './Component/Greetings';
import Hocs from './Component/Hocs';


function App() {
  const userName='anjana';  
  return (
    <div className="App">
      {/* <HOC/> */}
  {/* <UserContext.Provider value={userName}>
  <Greetings/>
  </UserContext.Provider> */}
  <Hocs/>
    </div>
  );
}

export default App;
