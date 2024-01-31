<template>
  <div class="common-layout">
    <el-container>
      <NavMenu/>
      <el-container>
        <el-header>Header</el-header>
        <el-main><router-view/></el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script setup lang="ts">
import NavMenu from './navMenu.vue'
</script>