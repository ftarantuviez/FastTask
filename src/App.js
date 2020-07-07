import React, {useState} from 'react';
import {TaskRow} from './components/TaskRow'


function App() {

  const [userName, setUserName] = useState('Francisco')
  const [taskItems, setTaskItems] = useState([
    {name: 'Task One', done: false},
    {name: 'Task Two', done: false},
    {name: 'Task Three', done: true},
    {name: 'Task Four', done: false}
  ])
  
  const toggleTask = task => 
    setTaskItems(taskItems.map(t => (t.name === task.name ? {...t, done: !t.done} : t)))

  const taskTableRows = () => taskItems.map(task =>(
      <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
    ))
  


  return (
    <div className="App">
     <h1>fasdf</h1>
     <table>

      <thead>
       <tr>
         <th>Description</th>
         <th>Done</th>
       </tr>
      </thead>
      
      <tbody>
        {taskTableRows()}
      </tbody>

     </table>
    </div>
  );
}

export default App;
