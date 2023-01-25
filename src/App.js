import './App.css';
import Todo from './components/Todo';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <h1>React</h1>
      <Todo text="Hello" />
      <Todo text="React 2" />
      <Todo text="React 3" />

    </div>
  )
}

export default App;
