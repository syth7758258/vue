<template>
    <div >
     <div style="background-color: #2d8cf0;"> 背景色</div>
      <div id="but">
        <Button type="dashed" >背景虚色</Button>
        <Button type="text">文本模式</Button>
        <Button type="info">初始化</Button>
        <Button type="success">成功</Button>
        <Button type="warning">警告</Button>
        <Button type="error">错误</Button>
        <!-- 搜索按钮 -->
        <Button type="warning" shape="circle" icon="ios-search"></Button>
        <Button type="error" icon="ios-search">警告搜索</Button>
        <Button type="info" shape="circle" icon="ios-search">初始搜索</Button>
        <Button type="primary" shape="circle">一般搜索</Button>
        <br><br><br><br><br><br>
          <!-- 按钮变大变小 -->
        <RadioGroup v-model="buttonSize" type="button">
            <Radio label="large">大</Radio>
            <Radio label="default">中</Radio>
            <Radio label="small">小</Radio>
        </RadioGroup>
        <br><br>
        <Button :size="buttonSize" type="primary">Primary</Button>
        <Button :size="buttonSize" type="default">Default</Button>
        <Button :size="buttonSize" type="dashed">Dashed</Button>
        <Button :size="buttonSize" type="text">Text</Button>
        <br><br>
        <Button :size="buttonSize" icon="ios-download-outline" type="primary" shape="circle"></Button>
        <Button :size="buttonSize" icon="ios-download-outline" type="primary">下载</Button>
        <br><br>
        <!--将多个Button放入ButtonGroup内，可实现按钮组合的效果。

通过设置ButtonGroup的属性size为large和small，可将按钮组尺寸设置为大和小，不设置size，则为默认（中）尺寸。

通过设置ButtonGroup的属性shape为circle，可将按钮组形状设置为圆角。vertical变成纵向拍裂-->
        <ButtonGroup :size="buttonSize" vertical>
            <Button :size="buttonSize" type="primary">
               测试1 <Icon type="ios-arrow-forward" />
            </Button>
            <Button :size="buttonSize" type="primary">
                测试2
                <Icon type="ios-arrow-forward" />
            </Button>
        </ButtonGroup> <br><br>
        <!--长按钮-->
        <Button  type="warning" long> 长按钮</Button> <br><br>
         <!--按钮禁用-->
        <Button  type="warning" disabled> 禁用按钮</Button>
         <!--加载--> <br><br>
         <Button loading shape="circle"></Button>
        <Button loading shape="circle" type="primary"></Button>
        <Button  type="warning" loading> 加载中</Button>
        <Button  type="error" :loading="loading" @click="jiazai"> 点击变成加载中</Button>
        <br><br><br>

        <!--图标设定 ,size大小，color颜色-->
        <Icon type="ios-add" size='120' color='red' />
        <Icon type="ios-albums" size='30' color='#19be6b' />
        <Icon type="ios-woman-outline" size='30' color='blue'/>
        <Icon type="ios-woman" size='30' color='#808695'/>
        <br><br><br>
        <!--差值表达式-->
        <div>差值表达式{{buttonSize}}</div>
        <!--常用差值表达式 变量模式-->
        <div v-text="loading"></div>
        <!--v-on的简写就是@-->
        <div v-html="vhtml" @click="dianji"></div>
        <!--属性绑定  v-bind可以缩写成为：-->
        <div :title="vhtml" @click="dianji">title属性绑定</div>
        <!--双向绑定  v-model-->
         <!-- input查看源码，modal里面的实现是绑定value值和input事件 -->
        <div :title="buttonSize" >
            <input v-model="loading"/>
        </div>
        <br><br><br>
    </div>
    <div id="gridDeo">
        <griddemo/>
    </div>
    </div>
    
</template>
<script>
import  griddemo from './gridDemo.vue'
export default {
    name:"topjs",
    components:{
        griddemo
    },
    data(){
        return{
            buttonSize: 'small',
            loading:false,
            vhtml:"<h2>章三好h2模式</h2>"
        }
    },
    methods:{
        jiazai(){
            //this.指的是当前节点
            this.loading=true;
        },
        dianji(){
            alert("你惦记了我");
            this.vhtml="<h2>点我变了</h2>"
        }
    }
}
</script>
