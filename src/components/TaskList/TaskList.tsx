import { Todo } from '../../@types/todo.type'
import styles from './taskList.module.scss'

interface TaskListProps {
  doneTaskList?: boolean
  listTodo: Todo[]
  handleDoneTodo: (id: string, done: boolean) => void
  startEditTodo: (id: string) => void
  deleteTodo: (id: string) => void
}

export default function TaskList(props: TaskListProps) {
  const { doneTaskList, listTodo, handleDoneTodo, startEditTodo, deleteTodo } = props

  return (
    <div className='mb-2'>
      <h2 className={styles.title}>{doneTaskList ? `Hoàn thành` : `Chưa hoàn thành`}</h2>
      <div className={styles.tasks}>
        {listTodo.map((todo) => (
          <div key={todo.id} className={styles.task}>
            <input
              type='checkbox'
              className={styles.taskCheckbox}
              checked={todo.done}
              onChange={(event) => handleDoneTodo(todo.id, event.target.checked)}
            />
            <span className={`${styles.taskName} ${todo.done ? styles.taskNameDone : ''}`}>{todo.name}</span>
            <div className={styles.taskActions}>
              <button className={styles.taskBtn} onClick={() => startEditTodo(todo.id)}>
                ✏️
              </button>
              <button className={styles.taskBtn} onClick={() => deleteTodo(todo.id)}>
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
