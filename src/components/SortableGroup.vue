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
import lodash from 'lodash'

const list = ref([
  { name: 'John', id: 1 },
  { name: 'Joao', id: 2 },
  { name: 'Jean', id: 3 },
  { name: 'Gerard', id: 4 }
])
const preview = ref<any[]>([])

/**
 * 将数组中的某个元素进行移动
 * @param arr 数组
 * @param oldIndex 移动的元素的 oldIndex
 * @param newIndex 移动的元素的 newIndex
 * @returns
 */
function arrayMove(arr: any[], oldIndex: any, newIndex: any) {
  console.log('arrayMove oldIndex', oldIndex)
  console.log('arrayMove newIndex', newIndex)
  const copy = lodash.cloneDeep(arr)

  if (oldIndex === newIndex) {
    // 如果 oldIndex 和 newIndex 相同，无需移动，直接返回原数组
    return copy
  }

  // 获取要移动的元素
  const movedElement = copy.splice(oldIndex, 1)[0]

  // 在新位置插入移动的元素
  copy.splice(newIndex, 0, movedElement)

  return copy
}

function initSortable() {
  const listEl = document.getElementById('list')
  const previewEl = document.getElementById('preview')

  Sortable.create(listEl!, {
    group: { name: 'componentList', pull: 'clone', put: false },
    sort: false,
    onEnd: function (e) {
      console.log('list e', e)
      if (e.from !== e.to) {
        const dragged = e.item
        const element = list.value[e.oldIndex!]

        preview.value.splice(e.newIndex!, 0, element)

        const parentElement = dragged.parentNode
        // 删除 DOM 元素
        parentElement!.removeChild(dragged)
      }
    }
  })

  Sortable.create(previewEl!, {
    group: 'componentList',
    onEnd: function (e) {
      console.log('preview e', e)
      preview.value = arrayMove(preview.value, e.oldIndex!, e.newIndex!)
    }
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
