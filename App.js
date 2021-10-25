import './App.css';

import TodoHeader from './TodoHeader'
import Timer from './Timer.js'
import Sounds from './Sounds.js'

function App() {
  

  return (
    <div style={{height: "100vh"}}>
      <TodoHeader title = "Tasks Todo"/>
      <Timer title = "Pomodoro Study Timer"/>
      <Sounds title = "Study Sounds" />
    </div>
  )
}

export default App;
