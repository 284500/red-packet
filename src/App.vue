<template>
  
  <countdown ref="test" @onfinish="finish"></countdown>
  <div class="rain-container" ref="rainContainer"></div>
  <record :show="recordShow" @onclose="onclose"></record>
</template>
<script setup>
import countdown from './components/countdown.vue';
import record from './components/record.vue';
import packet from './class/packet'
import {ref,onMounted} from 'vue'
const test=ref(null);
const rainContainer=ref(null);
const recordShow=ref(false);
const finish=function(e){
  
  //加载结束后挂载record组件
recordShow.value=true;

  setInterval(()=>{
    new packet({
    parent:rainContainer.value,
    callback(){
      console.log('你点击了红包')
    }
  })
  },200)
}
// const clickd=function(){
  // console.log(test2.value);
  // console.log(test.value);

//   test.value.Show(4100);
// }
const onclose=function(e){
  recordShow.value=false;
}
onMounted(() => {
  test.value.Show(4100);
  

})

</script>



<style  lang="scss" scoped>
.rain-container{
  position: fixed;
  top:0;
  left:0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(180deg,rgb(235, 200, 136),rgb(245, 160, 3));
  overflow: hidden;
}
</style>
