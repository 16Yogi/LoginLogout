import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Component/Register';
import Loginuser from './Component/Loginuser';
import Home from './Pages/Home';

function App() {
  return (
    <>
       <BrowserRouter>
          <Routes>
              <Route>
                  <Route path='/' element={<Home/>}></Route>
                  <Route path='/login' element={<Loginuser/>}/>
                  <Route path='/registration' element={<Register/>}/>
              </Route>
          </Routes>
       </BrowserRouter>
      
    </>
  );
}

export default App;
