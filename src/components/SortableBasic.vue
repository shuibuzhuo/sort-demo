<template>
  <div class="flex">
    <ul id="items">
      <li v-for="item in list" :key="item.id">{{ item.name }}</li>
    </ul>
    <div class="ml-50">
      <pre>{{ displayList }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sortable from 'sortablejs'
import { computed, onMounted, ref } from 'vue'

const list = ref([
  { name: 'John', id: 1 },
  { name: 'Joao', id: 2 },
  { name: 'Jean', id: 3 },
  { name: 'Gerard', id: 4 }
])

function initSortable() {
  var el = document.getElementById('items')
  var sortable = Sortable.create(el!, {
    onEnd: function (e) {
      console.log('e', e)
      const el = list.value.splice(e.oldIndex!, 1)
      list.value.splice(e.newIndex!, 0, el[0])
    }
  })
}

const displayList = computed(() => {
  return JSON.stringify(list.value, null, 2)
})

onMounted(() => {
  initSortable()
})
</script>

<style scoped></style>
