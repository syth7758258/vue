//引入引用vue文件。
import Vue from 'vue'

 import iView from 'iview'
// import {Button} from 'iview'
// import {Modal} from 'iview'
 import {Message} from 'iview'
// import {RadioGroup} from 'iview'
// import {Radio} from 'iview'
// import {Icon} from 'iview'
// import {ButtonGroup} from 'iview'


import 'iview/dist/styles/iview.css'
//引入自定义启动vue文件，并且写出别名
import rrr from './page/main.vue'

//注册插件，另外一种形式，按需加载
// Vue.component('Button',Button)
// Vue.component('Modal',Modal)
// Vue.component('RadioGroup',RadioGroup)
// Vue.component('Radio',Radio)
// Vue.component('Icon',Icon)
// Vue.component('ButtonGroup',ButtonGroup)


 Vue.prototype.Message=Message

//注册插件，全局加载
Vue.use(iView)

new Vue({
  //这里是加入模版别名
  render: h => h(rrr),
  //这里的aaa表示启动的index页面中的div的id，这里叫做挂载点
  //挂载点指的是vue会处理哪个div下面的东西。
}).$mount('#app')