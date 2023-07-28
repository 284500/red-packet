import defaultUrl from '../assets/OIP-C.jpg'
import { sample,random} from 'lodash';
export default class packet{
    constructor(options){
        //红包图片路径
        this.url=options.url || defaultUrl;
        //红包宽度
        this.width=options.width || '18vw';
        //红包高度
        this.height=options.height || 'auto';
        //红包轨迹
        this.track=options.track || sample([0,20,40,60,80]);
        //最终角度
        this.rotate=options.rotate || random(-360,360);
        //掉落速度
        this.duration=options.duration || random(3.1,6.1);
        //红包回调
        this.callback=options.callback;
        //放入容器
        this.parent=options.parent || document.body;
        this.create();
    }
    create(){
        const img=document.createElement('img');
        //图片地址
        img.src=this.url;
        //图片宽度
        img.style.width=this.width;
        //图片高度
        img.style.height=this.height;
        //图片的定位
        img.style.position='absolute';
        //图片的左边距
        img.style.left=this.track+'vw';
         //图片动画
        img.animate([
            {transform:'translateY(-20vh) rotate(0)'},
            {transform:`translateY(100vh) rotate(${this.rotate}deg)`}    
        ],{
            duration:this.duration*1000
        })
        //图片的回调
        img.ontouchstart=this.destory.bind(this,img);
        //放入容器
        this.parent.appendChild(img);
        setTimeout(()=>{
            img.remove()
        },this.duration*1000)
    }
   destory(current){
    current.remove();
    this.callback();
   }
}