<!--
 * @Author: zhuotuo
 * @Date: 2023-03-07 15:39:51
 * @LastEditors: zhuotuo
 * @LastEditTime: 2023-09-11 13:51:50
 * @Description: 
-->
<template>
  <div>
    <!-- <div class="row">
      <div class="box">
        <h1>VueDraggable</h1>
        <VueDraggableBasic />
      </div>
      <div class="box">
        <h1>Sortable</h1>
        <SortableBasic />
      </div>
    </div> -->
    <div class="row">
      <!-- <div class="box">
        <h1>VueDraggable group</h1>
        <VueDraggableGroup />
      </div> -->
      <div class="box">
        <h1>Sortable group</h1>
        <SortableGroup />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueDraggableBasic from '@/components/VueDraggableBasic.vue'
import VueDraggableGroup from '@/components/VueDraggableGroup.vue'
import SortableBasic from '@/components/SortableBasic.vue'
import SortableGroup from '@/components/SortableGroup.vue'
</script>

<style>
.box {
  padding: 20px;
  border: 1px dashed #ccc;
  margin: 20px;
}

.row {
  display: flex;
}

pre {
  text-align: start;
}

.flex {
  display: flex;
}

.ml-50 {
  margin-left: 50px;
}

.wrapper,
#group {
  width: 150px;
  border: 1px solid #ccc;
  padding: 15px;
}

ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

ul {
  width: 100%;
  height: 100%;
}
</style>
