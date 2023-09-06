<template>
  <div>
    <h1>Child</h1>
    <p>todos: {{ todos }}</p>
  </div>
</template>

<script setup lang="ts">
import useGetTodoInfo from '@/hooks/useGetTodoInfo'

const { todos } = useGetTodoInfo()
</script>

<style scoped>

</style>
