<template>
  <div class="flex">
    <div class="wrapper">
      <ul id="list">
        <li v-for="item in list" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
    <div class="wrapper">
      <ul id="preview">
        <li class="preview-item" v-for="item in preview" :key="item.id">{{ item.name }}</li>
      </ul>
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
import Sortable from 'sortablejs'
import { computed, onMounted, ref } from 'vue'

const list = ref([
  { name: 'John', id: 1 },
  { name: 'Joao', id: 2 },
  { name: 'Jean', id: 3 },
  { name: 'Gerard', id: 4 }
])
const preview = ref<any[]>([])

function initSortable() {
  const listEl = document.getElementById('list')
  const previewEl = document.getElementById('preview')
  Sortable.create(listEl!, {
    group: { name: 'componentList', pull: 'clone', put: false },
    sort: false,
    onEnd: function (e) {
      // 用下面这 4 行的话，可以更新 preview 数据，但是会出现两条数据到右边的容器
      // 但不用下面这 4 行的话， preview 数据不会更新
      // if (e.from !== e.to) {
      //   const element = list.value[e.oldIndex!]
      //   preview.value.splice(e.newIndex!, 0, element)
      // }
    }
  })

  Sortable.create(previewEl!, {
    group: 'componentList'
  })
}

const displayList = computed(() => {
  return JSON.stringify(list.value, null, 2)
})

const displayPreview = computed(() => {
  return JSON.stringify(preview.value, null, 2)
})

onMounted(() => {
  initSortable()
})
</script>

<style></style>
