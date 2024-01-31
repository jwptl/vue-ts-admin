<template>
    <el-aside width="200px">
        <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="2"
            text-color="#fff" router>
            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>Navigator One</span>
                </template>
            </el-sub-menu>
            <el-menu-item v-for="v in routes" :key="v.mid" :index="v.path">
                <el-icon><icon-menu /></el-icon>
                <span>{{ v.title }}</span>
            </el-menu-item>
        </el-menu>
    </el-aside>
</template>

<script lang="ts" setup>
import { mainStore } from '../store'
import { storeToRefs } from 'pinia';
const store = mainStore()
const { routes } = storeToRefs(store)
console.log(routes)
</script>