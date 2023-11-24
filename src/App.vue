<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { ref } from "vue";
import {ElButton} from "element-plus";
const router = useRouter();
let title = ref("欢迎使用本模板");
let message = ref("Vue3 + ts + eslint + element-plus");

const handlerClick = (path: string) => {
  router.push(path);
};
</script>

<template>
  <div class="main">
    <div class="example">{{ title }}</div>
    <div class="msg">{{ message }}</div>
    <div class="btns">
      <el-button type="primary" @click="handlerClick('/')">Go Home</el-button>
      <el-button type="primary" @click="handlerClick('/about')">Go About</el-button>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="less" scope>
.main {
  width: 100%;
  height: 100%;
  text-align: center;
  .example {
    font-size: 28px;
    font-weight: bold;
  }
  .msg {
    margin-top: 20px;
    font-size: 22px;
  }
  .btns {
    margin: 5px 0;
  }
}
</style>
