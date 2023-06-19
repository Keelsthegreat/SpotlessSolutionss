import './App.css';
import NavBar from './Components/NavBar';
import {Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import Home from './Components/Home';
import Services from './Components/Services';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
