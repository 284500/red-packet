<script setup>
import { getAxios } from './util/Request'
import countdown from './components/countdown.vue';
// import { showLoadingToast } from 'vant';
const test = function () {
  //   showLoadingToast({
  //   message: '加载中...',
  //   forbidClick: true,
  // });
  getAxios('/person.json', { name: 15 }).then(res => {
    console.log(res)
  })
}
</script>

<template>
  <h1>我是app</h1>
  <van-overlay :show="show">
    <div class="wrapper">

      <div class="block">
      </div>
    </div>
  </van-overlay>
  <van-button type="primary" @click="test">主要按钮</van-button>
  <countdown></countdown>
</template>

<style  lang="scss" scoped>
h1 {
  background-color: yellow;
  width: 187.5px;
}
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
</style>
