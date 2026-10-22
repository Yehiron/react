import { useState } from "react";
import Header from "./components/Header";
import TaskCard from "./components/TaskCard";

const  intialTask = [
  {id: 1, title: 'Repasar JSX', done: false},
  {id: 2, title: 'Crear mi primer componente', done: true},
  {id: 3, title: 'Practicar props', done: false}
]


export default function App() {

  const [tasks, setTasks] = useState(intialTask)
  const [newTask, setNewTask] = useState('')
  const pending = tasks.filter((task) => !task.done).length

  function handleAdd(event) {
    event.preventDefault()
    const title = newTask.trim()
    if (!title) return

    setTasks((current) => [
      ...current, 
      {id: crypto.randomUUID(), title, done: false}
    ])
    setNewTask('')
  }

  function handleToggle(id) {
    setTasks((current) => current.map((task) => 
      task.id === id ? { ...task, done: !task.done} : task
  ))
  }

  function handleDelete(id) {
    setTasks((current) => current.filter((task) => task.id !== id))
  }

  return (
    <main className="container">
      <Header />
      <section className="intro">
        <p className="eyebrow">Mi espacio de trabajo</p>
        <h1>Una cosa a la vez</h1>
        <p className="muted">Pequenos avances, todos los dias</p>
      </section>
      <section className="panel">
      <div className="section-heading">
        <h2>Mis tareas</h2>
        <span>{pending} pendientes</span>
      </div>

      <form className="add-form" onSubmit={handleAdd}>
        <input 
          type="text"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          placeholder="Que vas a hacer hoy?"
          aria-label="Nueva tarea" 
        />
        <button type="submit">Agregar</button>
      </form>
      <div className="tasks">
        {tasks.length === 0 ? (
          <p className="empty">No tienes tareas, Agrega una para empezar</p>
        ): tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))
      } 
      </div>
      </section>
      <footer>FOCUS - construido con React </footer>
    </main>
  )
}