import { useEffect, useState } from 'react'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import styles from './todoList.module.scss'
import { Todo } from '../../@types/todo.type'

interface HandleNewListTodo {
  (lstTodo: Todo[]): Todo[]
}

const syncReactToLocalStorage = (handleNewListTodo: HandleNewListTodo) => {
  const listTodoJSON = localStorage.getItem('listTodo')
  const listTodoObj: Todo[] = listTodoJSON ? JSON.parse(listTodoJSON) : []
  const newListTodo = handleNewListTodo(listTodoObj)
  localStorage.setItem('listTodo', JSON.stringify(newListTodo))
}

export default function TodoList() {
  const [listTodo, setListTodo] = useState<Todo[]>([])
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)

  const listDoneTodo = listTodo.filter((todo) => todo.done)
  const listNotDoneTodo = listTodo.filter((todo) => !todo.done)

  useEffect(() => {
    const listTodoJSON = localStorage.getItem('listTodo')
    const listTodoObj: Todo[] = listTodoJSON ? JSON.parse(listTodoJSON) : []
    setListTodo(listTodoObj)
  }, [])

  const addTodo = (name: string) => {
    if (!name.trim()) return
    const newTodo: Todo = {
      name: name,
      done: false,
      id: new Date().toISOString()
    }
    setListTodo((prev) => [...prev, newTodo])

    syncReactToLocalStorage((lstTodo) => [...lstTodo, newTodo])
  }

  const startEditTodo = (id: string) => {
    const foundTodo = listTodo.find((todo) => todo.id === id)
    if (foundTodo) {
      setCurrentTodo(foundTodo)
    }
  }

  const handleEditTodo = (name: string) => {
    const handler = (lstTodo: Todo[]) => {
      return lstTodo.map((todo) => {
        if (todo.id === currentTodo?.id) {
          todo.name = name
        }
        return todo
      })
    }
    setListTodo(handler)
    setCurrentTodo(null)
    syncReactToLocalStorage(handler)
  }

  const handleDoneTodo = (id: string, done: boolean) => {
    const handler = (lstTodo: Todo[]) => {
      return lstTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done }
        }
        return todo
      })
    }
    setListTodo(handler)
    syncReactToLocalStorage(handler)
  }

  const deleteTodo = (id: string) => {
    const handler = (lstTodo: Todo[]) => {
      return lstTodo.filter((todo) => todo.id !== id)
    }
    setListTodo(handler)
    setCurrentTodo(null)
    syncReactToLocalStorage(handler)
  }

  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput addTodo={addTodo} currentTodo={currentTodo} handleEditTodo={handleEditTodo} />
        <TaskList
          listTodo={listNotDoneTodo}
          handleDoneTodo={handleDoneTodo}
          startEditTodo={startEditTodo}
          deleteTodo={deleteTodo}
        />
        <TaskList
          doneTaskList
          listTodo={listDoneTodo}
          handleDoneTodo={handleDoneTodo}
          startEditTodo={startEditTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  )
}
