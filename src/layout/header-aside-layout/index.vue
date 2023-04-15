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
    <HeaderContainer />
    <el-main>
        <RouterView />
    </el-main>
</el-container>
</template>

<style scoped>

</style>