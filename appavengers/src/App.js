import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import YourOtherComponents from './components/Input';
import Home from './components/Home';
import Navbar from './components/Navbar';
import DocumentGrid from './components/DocumentGrid';

function App() {
  return (
    <div className="App">
 <Navbar/>
    <Provider store={store}>

 
 {/* Routing */}
      <Routes>
      
           
        <Route path='/' element={<Home/>}/>
          <Route path="/YourOtherComponents" element={<YourOtherComponents/>} />
          <Route path='/DocumentGrid' element={<DocumentGrid/>}></Route>
      </Routes>
    </Provider>
    </div>


  );
}

export default App;
