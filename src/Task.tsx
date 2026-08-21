import { useState } from 'react'
import './Task.css'

function Task() {
  const [task, setTask] = useState(' ')
  const [tasks, setTasks] = useState<string[]>([])

  return (
      <section className='task'>
          <h2>Today's Task</h2>
          <p>No Task Yet</p>
          <input type="text" value={task} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value)} placeholder="What do you need to do" />
          <button onClick={() => {
            setTasks([...tasks, task]) 
            setTask('')
            }}
            >Add Task</button>
          {tasks.map((task, index) => (<p key={index}>{task}</p>))}
      </section>
  )
}

export default Task
