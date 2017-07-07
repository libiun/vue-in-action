<template>
    <div id="testpage">
        test page
        <hr>
        <!-- 命名路由，用路由定义里的name属性  -->
        <router-link :to="{name: 'Home'}">Home</router-link>
        <!-- 直接用path -->
        <router-link :to="{path: '/test'}">testpage</router-link>
    </div>
</template>
<script>
export default {
    name: 'testpage'
}
</script>
<style>

</style>

