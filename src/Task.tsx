import { useState } from 'react'
import './Task.css'

function Task() {
  const [task, setTask] = useState(' ')
  const [tasks, setTasks] = useState<string[]>([])

  return (
      <section className='tasks'>
          <h2>Today's Task</h2>
          <p>No Task Yet</p>
          <input type="text" value={task} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value)} placeholder="What do you need to do" />
          <button onClick={() => {
            setTasks([...tasks, task]) 
            setTask('')
            }}
            >Add Task</button>
          {tasks.map((task, index) => (
            <div key={index}>
              <p>{task}</p>
              <button onClick={() => { if(task.trim() !== '') setTasks(tasks.filter((_, i) => i !== index))}}>Delete</button>
            </div>
          ))}
      </section>
  )
}

export default Task
