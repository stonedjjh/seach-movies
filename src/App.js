import './App.css';
import 'bulma/css/bulma.css'

import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { Route, Routes } from 'react-router-dom';    
import { NotFound } from './pages/NotFound';



function App() {
 
  
  return (
    <div className="App">      
      <Routes>
        <Route exact path = '/' Component={Home}/>
        <Route path = 'Detail/:id' Component={Details}/>
        <Route path ='*' Component={NotFound}/>
      </Routes>
    
    </div>
  );
}

export default App;
