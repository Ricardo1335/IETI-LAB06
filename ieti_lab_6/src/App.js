import React from 'react';
import Login from './components/Login';
import Page2 from './components/Page2';
import Task from './components/Task';
import './App.css';
import {
  BrowserRouter as Router, 
  Routes,
  Route, 
} from 'react-router-dom'; 


function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path = "/ruta" element= {<Login />}>
          </Route>
          <Route path = "/Page2" element= {<Page2 />}>
          </Route>
          <Route path = "/Task" element= {<Task />}>
          </Route>
          <Route path = "/" element = {<h>Pagina inicial escriba "/ruta" para ingresar al log in, "/page2" para hacer uso de las rutas de react, "/Task" para acceder a las funcionalidades de las tareas</h>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
