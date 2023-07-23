<template>
  <van-overlay>
    <div class="wrapper">
      <div class="content">
        <span class="title">
          恭喜获得
        </span>
        <span class="amount">
          {{ amount }}
        </span>
        <span class="unit">
          元
        </span>
      </div>
      <van-icon name="close" class="icon" @click="close" />
    </div>
  </van-overlay>
</template>
<script setup>
import { ref } from 'vue'
const amount = ref(50);
// const isShow=ref(true)
const emit = defineEmits(['onclose'])
const close = function () {
  // isShow.value=false;
  emit('onclose', '组件关闭');

}
</script>
<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-image: url('../assets/OIP.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 300px;

  // background: url('../assets/OIP.jpg') no-repeat center/300px;
  .content {
    transform: translate(0, -18px);
    text-align: center;

    .title {
      display: block;
      font-size: 25px;
      color: rgb(209, 138, 7);
      font-weight: 500;
      margin-bottom: 5px;
    }

    .amount {
      color: red;
    }

  }

  .icon {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 60px;
    color: aliceblue;
  }
}</style>