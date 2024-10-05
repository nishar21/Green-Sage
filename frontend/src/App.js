
import './App.css';
import Web from './Web';
import Signup from './Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Dashboard from './components/Dashboard';
import Geo from './Geo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Signup/>}></Route>
          <Route path='/login'  element={<Login/>}></Route>
          <Route path='/web'  element={<Web/>}></Route>
          <Route path='/dashboard'  element={<Dashboard/>}></Route>
          <Route path='/geo'  element={<Geo/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
