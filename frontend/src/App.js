import './App.css';

import Signup from './components/Signup';
import Login from "./components/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import StudentTable from './components/StudentTable';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className='container'>
    <Routes>
      <Route exact path='/' element={<StudentTable/>}/>
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/login" element={<Login/>} />

        
        
       
    </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;