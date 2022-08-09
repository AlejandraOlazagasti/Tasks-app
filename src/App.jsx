import './App.css'
import TaskList from './components/TaskList'

function App() {

  return (
    <div className="tasks-app">
      <div className='tasks-principal__list'>
        <h1>My Tasks</h1>
        <TaskList />
      </div>
    </div>
  )
}

export default App
