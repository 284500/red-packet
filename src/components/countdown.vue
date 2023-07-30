<template>
    <van-overlay :show="show">
    <div class="wrapper">

      <div class="block">
        <van-count-down :time="count" @finish="finish">
        <template #default="time">
            <span class="second">{{ time.seconds }}</span>
        </template>
        </van-count-down>
      </div>
    </div>
  </van-overlay>

</template>
<script setup>
import {ref,reactive} from 'vue'
const count=ref(60*1000);
//初始不挂载
const show=ref(false);
const finish=function(){
    show.value=false;
    emit('onfinish','倒计时结束');
}
const emit=defineEmits(['onfinish'])
function Show(time){
    show.value=true;
    count.value=time;
}
defineExpose({
  Show
});
</script>
<style scoped lang="scss">

.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    // background-color: #fff;
  }
  .second{
    font-size: 50px;
    color:orange;
  }
</style>