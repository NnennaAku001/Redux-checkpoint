import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import Task from './components/Task';
import './App.css';


const App = () => {
  return (
    <div className="container bg-white p-4 mt-5">
      <Card>
        <Card.Body className='m-4'>
          <h1>My Todo List</h1>
          <AddTask />
          <br />
          <h3>Task(s)</h3>
          <ListTask />
          <Task />
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
