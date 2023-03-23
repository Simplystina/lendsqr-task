import React  from "react";
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route exact={true} path='/' ></Route>
          <Route exact={true} path='/destination'>
           
          </Route>
        
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
