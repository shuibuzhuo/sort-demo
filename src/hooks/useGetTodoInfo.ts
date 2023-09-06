import { useTodosStore } from "@/stores/todos"
import { watch, ref } from "vue"

function useGetTodoInfo() {
  const todosStore = useTodosStore()

  const todos = ref<any[]>([])

  watch(() => todosStore.todos, val => {
    console.log('watch val1', val)
    todos.value = val
  })

  return { todos }
}

export default useGetTodoInfo
