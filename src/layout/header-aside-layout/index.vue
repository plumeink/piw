<script>
import HeaderContainer from '@/layout/header/index.vue'
import {RouterView} from "vue-router";
export default {
    name: "HeaderAsideLayout",
    components: {RouterView, HeaderContainer}
}
</script>

<template>
<el-container>
    <el-header height="52px">
        <HeaderContainer />
    </el-header>
    <el-main>
        <RouterView />
    </el-main>
</el-container>
</template>

<style scoped lang="scss">
.piw-header {
    --piw-header-padding: 0 0;
}
</style>