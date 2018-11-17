<template>
    <el-container id="app">
        <el-header class="title-bar" :height="titleBarHeight">
        </el-header>
        <el-container>
            <el-aside id="nav" width="48">
                <el-menu class="nav-bar">
                    <el-menu-item v-for="item in nav" :index="item.label">
                        <span slot="title">{{item.label}}</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator'
    import { State } from 'vuex-class'
    import { NavItem } from './store/modules/app'

    @Component
    export default class App extends Vue {
        private titleBarHeight: string = '40px'
        @State((state) => state.app.navItems)
        private nav: NavItem[]
    }
</script>

<style>
    html, body {
        margin: 0;
        padding: 0;
        height: 100vh;
        overflow: hidden;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100vh;
    }
    #nav {
        display: flex;
    }
</style>

<style scoped>
    .title-bar {
        height: 28px;
        -webkit-user-select: none;
        -webkit-app-region: drag;
    }
    .nav-bar {
        flex: 1;
    }
</style>
