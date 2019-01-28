<template>
<!-- 一个模版里面只有一个div外部标签 -->
<div>
    <div id="contmap" v-show="contShow" style="height: 500px;"></div>
    
    <div id="but">
        <Button type="info"   @click="aa = true" >测试弹窗</Button>
        <Button type="info"   @click="showContmap" >测试2显示和隐藏</Button>
    </div>
    <div id="span">
        <!-- v-model查看源码，modal里面的实现是绑定value值和input事件 -->
        <Modal id="aaa" :value="aa" @input="aaValue"  title="测试弹窗" @on-ok="isok"
        @on-cancel="iscancel" okText="点我进行确认">aaaaa</Modal>
    </div>
     
    <div id="top">
        <topvue/>
    </div>
    for循环json集合
    <div>
        <div v-for="(item,index) of list" :key="index">
            <div v-if="item.age >19" 
                :style="mainT">
               大于19岁的 name:{{item.name}}
            </div>
             <div v-else>
                其他name:{{item.name}}
            </div>
            name:{{item.name}},age:{{item.age}}
        </div>
    </div>
</div>
    
 
    
</template>
 

  <script>
  import topvue from './top.vue'
  export default {
    name:"contm",
    components: {
        //加入一个模块进去
        topvue
    },
    data(){
        return{
            contShow:true,
            aa:false,
            list:[{"name":"沈阳","age":30},{"name":"菜虫","age":19}],
            mainT:{
                color:'blueviolet',
                textShadow:"0 0 5px red"
            }
        }
    },
    //表示data加载完毕以后才进行加载该方法
    created() {
        //表示整体渲染完毕以后才会加载该方法
        this.$nextTick(() => {
            this.initMap(8,[104.0647600000,30.5702000000])
        })
    },
    methods: {
     
        
        //定义执行方法
        initMap(zo,center) {
            const Vm =this
            // 初始化高德地图，下面这个表示不进行验证代码规则
            // eslint-disable-next-line
            Vm.map = new AMap.Map('contmap', {
                resizeEnable: true,
                zoom: zo,
                center: center,
            })
        },
        showContmap(){
            this.contShow = !this.contShow;
        },  
        isok() {
            const Vm =this
            Vm.Message.success('你点了确认');
        },
        iscancel() {
            const Vm =this
            Vm.Message.error('你点了取消');
        },
        aaValue(val) {
            this.aa=val
        }
    }
  }
</script>
 
 
  
  

 
   