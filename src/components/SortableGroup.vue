<!--
 * @Author: zhuotuo
 * @Date: 2023-09-06 15:57:21
 * @LastEditors: zhuotuo
 * @LastEditTime: 2023-09-11 14:51:32
 * @Description: 
-->
<template>
  <div class="flex">
    <div class="wrapper">
      <ul id="list">
        <li class="origin" v-for="item in list" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
    <div class="wrapper">
      <ul id="preview">
        <li v-for="item in preview" :key="item.id">
          <div v-if="item.children" id="group">
            <div v-for="child in item.children" :key="child.id">{{ child.name }}</div>
          </div>
          <div v-else>{{ item.name }}</div>
        </li>
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
import { computed, nextTick, onMounted, ref } from 'vue'

const list = ref([
  { name: 'John', id: 1, key: 'special' },
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
      console.log('e', e)
      if (e.from !== e.to) {
        const dragged = e.item
        const element = list.value[e.oldIndex!]

        if (e.to.id === 'group') {
          preview.value[e.newIndex!].children.push(element)
        } else {
          if (element.key === 'special') {
            preview.value.splice(e.newIndex!, 0, { ...element, children: [] })
          } else {
            preview.value.splice(e.newIndex!, 0, element)
          }
        }

        nextTick(() => {
          const group = document.querySelectorAll('#group')
          console.log('group', group)
          Sortable.create(group[group.length - 1] as HTMLElement, {
            group: 'componentList'
          })
        })

        const parentElement = dragged.parentNode
        // 删除 DOM 元素
        parentElement!.removeChild(dragged)
      }
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
