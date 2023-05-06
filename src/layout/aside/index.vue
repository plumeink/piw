<script lang="tsx">
export default {
    name: "AsideContainer"
}
</script>

<script setup lang="tsx">
import {useRoute} from 'vue-router';
import menuConfig from "@/config/menuConfig";
import {useAuthStore} from '@/stores/auth'

const store = useAuthStore();
const router = useRoute();

const menuItemRender = (props: object) => props.menu.map(item => {
    const {uri} = props;
    const pathname = router.path;
    const {permissions} = store;
    const path = uri ? uri + item.path : item.path;
    if (item.subitem !== undefined && item.subitem.length > 0 && (item.permission === true || permissions[item.permission])) {
        return (
            <el-sub-menu index={path}>
                {{
                    title: () => item.title,
                    default: () => menuItemRender({menu: item.subitem, uri: path})
                }}
            </el-sub-menu>
        );
    } else {
        if (item.permission === true || permissions[item.permission]) {
            return (
                <el-menu-item index={path} onClick={() => handleRouterPush(pathname, path)}>
                    {item.title}
                </el-menu-item>
            );
        } else {
            return null;
        }
    }
});

const handleRouterPush = (pathname, path) => {
    if (pathname !== path) {
        this.props.history.push(path);
    }
}
</script>

<template>
    <div>
        <el-menu>
            <menuItemRender :menu="menuConfig.main" uri=""/>
        </el-menu>
    </div>
</template>

<style scoped>

</style>