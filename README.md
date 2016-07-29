# ColorChange
Color Change —— 颜色变换插件，可改变文字、背景、边框颜色

###options###
```html
auto: false,//是否自动开始
type: "text",//目标变色类型：text、background、border
changeChildren: false,//是否以所有子元素作为变色对象，true且innerHTML为纯文字时，单个字符将被添加<span>标签
randomcolor: false,//是否随机生成颜色
interval: 200,//变色频率
normalcolor: '#000',//pause恢复时目标的颜色
colors: [
    '#00ffff',
    '#f1c40f',
    '#3498db',
    '#000000',
    '#1abc9c',
    '#e67e22',
    '#95a5a6',
    '#ffffff',
    '#2ecc71',
    '#f00000'
],//指定颜色集合，randomcolor=false时有效
randomshow: false,//是否随机展示colors指定的颜色集合
pause: true//是否支持点击目标暂停/恢复
```
<!--
###demo###
See [here](http://tt-cc.cc/front-end/jquery-plugins/colorchange)
-->