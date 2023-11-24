<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useHomeStore } from "../store/home";

const homeStore = useHomeStore();
const { count, double } = storeToRefs(homeStore);
const { increment, reduceCount } = homeStore;
</script>

<template>
  <div class="home">
    <div class="title">Home</div>
    <div class="count">count: {{ count }}, doubleCount: {{ double }}</div>
    <div class="btns">
      <el-button type="primary" @click="() => increment()">+</el-button>
      <el-button type="primary" @click="() => reduceCount()">-</el-button>
    </div>
  </div>
</template>

<style lang="less" scope>
.home {
    .count,.btns {
        margin: 5px 0;
    }
}
</style>
