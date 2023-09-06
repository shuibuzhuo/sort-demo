/*
 * @Author: zhuotuo
 * @Date: 2023-03-07 15:39:51
 * @LastEditors: zhuotuo
 * @LastEditTime: 2023-09-05 16:49:01
 * @Description: 
 */
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos', () => {
  const todos = ref<any[]>([])

  function setTodos(newTodos: any[]) {
    todos.value = newTodos
  }

  return { todos, setTodos }
})
