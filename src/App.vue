<template>
  <countdown ref="test" @onfinish="finish"></countdown>
  <div class="rain-container" ref="rainContainer"></div>
  <record :show="recordShow" @onclose="onclose" :count="100"></record>
</template>
<script setup>
import countdown from './components/countdown.vue';
import record from './components/record.vue';
import packet from './class/packet'
import axios from 'axios'
import {ref,onMounted} from 'vue'
const test=ref(null);
const rainContainer=ref(null);
const recordShow=ref(false);
const key=ref();
//倒计时结束开始下雨
const finish=function(e){
  //加载结束后挂载record组件
  // recordShow.value=true;
  let timer=setInterval(()=>{
    new packet({
    parent:rainContainer.value,
    callback(){
      axios({
					method: 'get',
					url: `/api/api/v2/rob/${key.value}`
				})
      console.log('你点击了红包')
    }
  })
  },200)
  setTimeout(()=>{
    clearInterval(timer)
    //红包雨结束开启奖励框
    recordShow.value=true;
    const {data:{data}}= axios({
					method: 'get',
					url: `/api/api/v2/record/${key.value}`
				})
    console.log(data)
  },5000)
  
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
  
  (async function start(){
    let {data:{data}}=await axios({
					method: 'get',
					url: '/api/api/v1/send/100/20'
				})
    key.value=data;
    console.log(key.value)
    console.log(data)
    test.value.Show(4100);
  })();

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
