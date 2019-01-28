<template>
    <div>
       <input v-model="one">
       <input v-model="tow">
       <div>{{threa}}</div>
       <div>{{fore}}</div>
       <br><br><br><br><br><br>

       <!-- v-if ,v-show ,v-for的使用 -->
       <div v-if="dianwo">你点下面的按钮，dom结构里面都没有我就会不见了</div>
       <Button  @click="dianwoClieck"  >点我上面的消失</Button>  <br> 


       <div v-show="dianwoDis">你点下面的按钮，加上了display=true
       </div>
       <Button @click="dianwoDisClieck"   >点我上面的消失</Button>
       <!-- 循环处理 其中item表示和foreach一样的定义每次的值，index表示索引，of相当于冒号，list被循环的集合，绑定属性key不能够是重复的值-->
       <ul>
           <li v-for=" (item ,index ) of list" :key="index">{{item}}</li>
       </ul>
       <br><br>
       输入值然后变化li列表信息
       <input class="liclass" v-model="inputList"/>
       <Button type="warning" @click="butClick" >点击我</Button>
       <!-- <ul>
           <li v-for="(item,index) of iList" :key="index">{{item}}</li>
       </ul>  -->
       <ul>
           <!-- vue里面就是多个组件进行组装出来的。 -->
           <!-- 给内部传递一个自定义参数context的值，而传递的这个值又是for循环里面的item迭代值 -->
           <!-- 这里是绑定@后面的名字，绑定主页面中的什么方法，例如这里就是：自页面的deleteCli绑定的是父页面的deleteMain方法 -->
           <!-- 这里的deleteCli表示发布一个这样的方法，如果是子页面订阅了它就会进行触发 -->
           <myli v-for="(item ,index) of iList" :key="index" :context="item" 
           :indexItem="index"
          
           
           @deleteCli="deleteMain"></myli>
       </ul>

    </div>
</template>
<script>
import myli from './myLi.vue'
export default {
    name:"gridDemo",
    components:{
        myli
    },
    data (){
        return {
            one:1,
            tow:2,
            fore:0,
            dianwo:true,
            dianwoDis:true,
            list:[1,2,3,4,4,4,4,4,4,3,32,34],
            iList:[],
            inputList:""
        }
    },
    methods :{
        dianwoClieck : function(){
            this.dianwo=!this.dianwo
            /* eslint-disable */ 
            //这里表示，进行调试模式
            debugger
        },
        dianwoDisClieck : function(){
            this.dianwoDis=!this.dianwoDis
        },
        butClick : function(){
            //push是像list中添加数据，这里因为是inputList是一个双向绑定的值,todoList
            this.iList.push(this.inputList)
            this.inputList=""
        },
        deleteMain : function(index){
            //表示从集合里面splice删除下标是index的值，并且是只是删除1项
            //后面一个数字是从当前位置开始，向后删除几位，例如：list是[1,2,3,4,45,4,5，6],如果是splice（5，2）那么就表示，从4开始删除，并且删除两位，所以就会删除4和5
            this.iList.splice(index,1)
        }
    },
    //计算属性，意思就是里面定义一个属性，然后写方法进行值的填写
    computed:{
        threa: function(){
            //默认是字符串类型，如果需要进行数字相加，需要进行转换
           // Boolean
            //Array
            //String
            //JSON
            return  Number(this.one)+Number(this.tow)
        }
    },
    //监听器，所有的值监听变化都可以写在这里面
    watch:{
        //当上面定义的one这个值发生变化的时候，执行funciton里面的内容
        one: function(newFor,oldFor){
            console.log("new"+newFor);
            console.log("old"+oldFor);
            this.fore++
        }
    }
}
</script>

<style>
.liclass{
    color:blue
}
</style>


