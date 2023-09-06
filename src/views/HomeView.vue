<script setup lang="ts">
import { ref, computed, inject, onMounted } from 'vue'

const el = ref<HTMLInputElement | null>(null)

onMounted(() => {
  el.value?.focus()
})

interface Obj {
  [x: number]: any
}

const obj: Obj = {
  0: '张三',
  1: '里斯'
}
</script>

<template>
  <main>
    <input type="text" ref="el" />
    <TheWelcome />
  </main>
</template>
