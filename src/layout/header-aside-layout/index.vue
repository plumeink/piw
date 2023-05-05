<script lang="ts">
export default {
    name: "HeaderAsideLayout",
}
</script>

<script setup lang="ts">
import HeaderContainer from '@/layout/header/index.vue'
import FooterContainer from '@/layout/footer/index.vue'
import {RouterView} from "vue-router";
</script>

<template>
<el-container>
    <el-header>
        <HeaderContainer />
    </el-header>
    <el-main>
        <RouterView />
    </el-main>
    <el-footer>
        <FooterContainer />
    </el-footer>
</el-container>
</template>

<style scoped lang="scss">
.piw-header {
    height: 52px;
    --piw-header-padding: 0 0;
}
</style>