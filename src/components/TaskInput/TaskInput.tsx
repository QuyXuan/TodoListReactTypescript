import { useEffect, useState } from 'react'
import styles from './taskInput.module.scss'
import { Todo } from '../../@types/todo.type'

interface TaskInputProps {
  addTodo: (name: string) => void
  currentTodo: Todo | null
  handleEditTodo: (name: string) => void
}

export default function TaskInput(props: TaskInputProps) {
  const { addTodo, currentTodo, handleEditTodo } = props
  const [taskName, setTaskName] = useState<string>('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (currentTodo) {
      handleEditTodo(taskName)
    } else {
      addTodo(taskName)
    }
    setTaskName('')
  }

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value)
  }

  useEffect(() => {
    if (currentTodo) {
      setTaskName(currentTodo.name)
    }
  }, [currentTodo])

  return (
    <div className='mb-2'>
      <h1 className={styles.title}>TODO List Typescript</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type='text' placeholder='Caption goes here' value={taskName} onChange={onChangeInput} />
        <button type='submit'>{currentTodo ? `✅` : `➕`}</button>
      </form>
    </div>
  )
}
