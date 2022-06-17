import { marquee } from './marquee.js'
import { tab } from './tab.js'
marquee()
tab()

import "./styles/index.css"
//引用less
import './styles/index.less'
// 1.引入图片
// 图片的src属性
import gifStr from './assets/1.gif'
import pngStr from './assets/logo_small.png'

// 2.创建图片节点
const gif = document.createElement('img')
const png = document.createElement('img')

// 3.给src赋值
gif.src = gifStr
png.src = pngStr
// 4.插入节点
document.body.appendChild(gif)
document.body.appendChild(png)

import "./assets/fonts/iconfont.css"

// import App from './App.vue' // 根vue文件
// import Vue from 'vue' // 引入vue.js对象
// new Vue({ 
//     render: h => h(App) // 渲染函数, 渲染App组件里的标签
//   }).$mount('#app') // 把vue文件的标签结构 -> 挂载到id为app的标签里

  const fn = () => {
    console.log('你好');
}
fn()

