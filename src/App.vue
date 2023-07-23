<template>
  <countdown ref="test" @onfinish="finish"></countdown>
  <record :show="recordShow" @onclose="onclose"></record>
</template>
<script setup>
import countdown from './components/countdown.vue';
import record from './components/record.vue'
import {ref,onMounted} from 'vue'
const test=ref(null);
const recordShow=ref(false);
const finish=function(e){
  
  //加载结束后挂载record组件
recordShow.value=true;
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

</style>
