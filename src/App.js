import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header" />
        <h1>todos</h1>
        <p>items will presist in the browser local storage</p>
      </div>
      <div id="todo-logic">

        <input placeholder="Add to do..." />
      </div>
      <div id="todo-list">
        <h2>
          to do list retrive
        </h2>
      </div>
    </>

  );
}

export default App;
