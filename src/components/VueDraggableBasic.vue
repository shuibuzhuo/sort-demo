<template>
  <div class="flex">
    <draggable class="dragArea list-group w-full" v-model="list" item-key="id">
      <template v-slot:item="{ element }">
        <div>{{ element.name }}</div>
      </template>
    </draggable>
    <div class="ml-50">
      <pre>{{ displayList }}</pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import draggable from 'vuedraggable'
import { ref, computed } from 'vue'

const list = ref([
  { name: 'John', id: 1 },
  { name: 'Joao', id: 2 },
  { name: 'Jean', id: 3 },
  { name: 'Gerard', id: 4 }
])

const displayList = computed(() => {
  return JSON.stringify(list.value, null, 2)
})
</script>
