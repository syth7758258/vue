<template>
<div>
    <!-- 这里的值是外部传递过来进行展示的，父组件向子组件是通过属性进行传递的 -->
    <li class="liclass" @click="clickLi">{{context}}{{indexItem}}</li>
</div>
    
</template>
<script>
export default {
    name :"myli",
    //接收外部传递的参数定义 
    //定义外部传递的数据信息
    props:{
        //参数名字
        context:{
            //参数类型
            type:String,
            //是否必须
            required:true,
            validator: function(value){
                //验证值是否合法
                console.log(value)
                return true
            }
        },

        //参数名字
                indexItem:{
                    //参数类型
                    type:Number,
                    //是否必须
                    required:true,
                    validator: function(value){
                        //验证值是否合法
                        console.log(value)
                        return true
                    }
                }
    },
    methods :{
        clickLi: function(){
            //deleteCli表示，父页面调用该方法的时候，进行出发，emit是表示订阅一个deleteCli事件，并且传递一个索引过去
           this.$emit('deleteCli', this.indexItem);
        }
    }
}
</script>
<!--scoped表示该组件使用自己里面的样式信息，不受影响
如果不加上，就表示该项信息及自页面信息全部采用改样式信息

一句话说完

1.加了scoped表示自己及自己以下的子页面，是使用该样式

2.如果没有加，表示父页面中有的样式就继承，没有就使用默认的
-->
<style scoped>
.liclass{
    color:aqua
}
</style>


