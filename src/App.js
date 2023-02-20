import './assets/style/todo.css';
import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [array] = useState([
    {
      task: 'Go to the Gym',
      completed: false,
      test: 'test2',
    },
    {
      task: 'Go to the pharmacy',
      completed: true,
      test: 'test2',
    },
  ]);
  return (
    <>
      <div className="App">
        <header className="App-header" />
        <h1>todos</h1>
        <p>items will presist in the browser local storage</p>
      </div>
      <div id="todo-logic">
        <input className="inputAdd" placeholder="Add to do..." />
        <i className="fa-solid fa-circle-plus" />
      </div>
      <div id="todo-list">
        {array.map((x, i) => (
          <div className="listdiv" key={`num${i.toString()}`}>
            <div className="taskDiv">
              <input type="checkbox" />
              <p>{x.task}</p>
            </div>
            <div className="icons">
              <i id="pen" className="fa-solid fa-pen" />
              <i className="fa-solid fa-trash" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
