<template>
    <div>
        <div class="row">
            <div style="flex: 40%;">
                <logo />
            </div>
            <div style="flex: 60%;">
                <h1>Electron Nuxt TypeScript</h1>
                <p>Electron: {{ versions.electron }}</p>
                <p>Chrome: {{ versions.chrome }}</p>
                <p>Node: {{ versions.node }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "nuxt-class-component";
import Logo from "~/components/Logo.vue";
import { remote } from "electron";

@Component({ components: { Logo } })
export default class Index extends Vue {
    readonly versions = remote.process.versions;
}
</script>

<style>
body {
    font-family: "Roboto";
}
.row {
    display: flex;
}

.logo-container {
    position: relative;
}

.centered {
    text-align: center;
}
</style>
