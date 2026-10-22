export default function TaskCard({task, onToggle, onDelete}){
    return(
        <article className={`task-card ${task.done ? 'is-done' : ''}`}>
            <label className="task-label">
            <input 
                type="checkbox"
                checked={task.done}
                onChange={() => onToggle(task.id)} 
            />
            <span className="task-title">{task.title}</span>
            </label>
                <button
                    className="delete-button"
                    type="button"
                    onClick={() => onDelete(task.id)}
                    aria-label={`Eliminar ${task.title}`}
                    >
                     Eliminar   
                </button>
            
        </article>
    )
}
