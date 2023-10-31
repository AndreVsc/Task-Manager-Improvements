import './App.css';
import {Outlet} from 'react-router-dom';

function App() {

  return (
    <>
      <div className='App'><h1>Task-Manager</h1></div>
      <Outlet/>
    </>
  );
}

export default App;
