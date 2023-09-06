<template>
  <div class="flex">
    <div class="wrapper">
      <draggable
        v-model="list"
        :group="{ name: 'componentList', pull: 'clone', put: false }"
        :sort="false"
        item-key="id"
        @end="onEnd"
      >
        <template v-slot:item="{ element }">
          <div>{{ element.name }}</div>
        </template>
      </draggable>
    </div>
    <div class="wrapper">
      <draggable v-model="preview" group="componentList" item-key="id">
        <template v-slot:item="{ element }">
          <div>{{ element.name }}</div>
        </template>
      </draggable>
    </div>

    <div class="ml-50">
      <h1>list</h1>
      <pre>{{ displayList }}</pre>
    </div>
    <div class="ml-50">
      <h1>preview</h1>
      <pre>{{ displayPreview }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'
import { ref, computed } from 'vue'

const list = ref([
  { name: 'John', id: 1 },
  { name: 'Joao', id: 2 },
  { name: 'Jean', id: 3 },
  { name: 'Gerard', id: 4 }
])
const preview = ref<any[]>([])
function onEnd(e: any) {
  const el = list.value[e.oldIndex]
  console.log('el', el, 'e.oldIndex', e.oldIndex, 'e.newIndex', e.newIndex)
  // preview.value.splice(e.newIndex, 0, el)
}

const displayList = computed(() => {
  return JSON.stringify(list.value, null, 2)
})

const displayPreview = computed(() => {
  return JSON.stringify(preview.value, null, 2)
})
</script>

<style></style>
