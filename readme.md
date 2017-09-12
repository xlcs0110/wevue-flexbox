# wevue-flexbox

Vue.js 2.0和Wevue.js 2的Flexbox组件,基于[flex.css](https://github.com/lzxb/flex.css)


> 同时适用于 [wevue](http://wevue.daocms.io) 组件和 [vue](https://cn.vuejs.org/) 单文件组件

## 例子 (Demo)

[flex.css官方demo](http://lzxb.name/flex.css/)

## 用法 (How to use)

### Vue.js用法

#### 安装 (install)
    npm i wevue-flexbox --save  //Vue.js
    cd wevue_project && wevue add wevue-flexbox  //Wevue.js

#### 引用 (require)
    
    //Vue component
    import {Flexbox,FlexboxItem} from 'wevue-flexbox'
    Vue.component('flexbox',Flexbox)
    Vue.component('flexbox-item',FlexboxItem) 
    //Vue plugin
    import WevueFlexbox from 'wevue-flexbox'
    //or
    var WevueFlexbox = require('wevue-flexbox')
    //use
    Vue.use(WevueFlexbox)


#### 使用 (example)

    <flexbox style="height:100px;" main="left" dir="top" box="mean">
        <flexbox-item style="background:red;" size="3">
            1
        </flexbox-item>
        <flexbox-item style="background:blue;" size="3">
            2
        </flexbox-item>
        <flexbox-item style="background:green;" size="4">
            3
        </flexbox-item>
    </flexbox>  


## API

### flexbox attributes

<table>
    <tr>
        <td>属性名 Attr.name</td>
        <td>描述 Description</td>
        <td>必需 Required</td>
        <td>默认值 Default value</td>
    </tr>
    <tr>
        <td>dir</td>
        <td>主轴方向</td>
        <td>N</td>
        <td>left</td>
    </tr>
    <tr>
        <td>main</td>
        <td>主轴对齐方式</td>
        <td>N</td>
        <td>-</td>
    </tr>
    <tr>
        <td>cross</td>
        <td>交叉轴对齐方式</td>
        <td>N</td>
        <td>-</td>
    </tr>
    <tr>
        <td>box</td>
        <td>子元素设置</td>
        <td>N</td>
        <td>-</td>
    </tr>
</table>

### flexbox-box attributes

<table>
    <tr>
        <td>属性名 Attr.name</td>
        <td>描述 Description</td>
        <td>必需 Required</td>
        <td>默认值 Default value</td>
    </tr>
    <tr>
        <td>size</td>
        <td>
        子元素尺寸（取值范围(0-10)，单独设置子元素多余空间的如何分配，设置为0，则子元素不占用多余的多余空间 多余空间分配 = 当前box值/子元素的box值相加之和）
        </td>
        <td>N</td>
        <td>-</td>
    </tr>
</table>


### flexbox 属性可选值

#### dir

top：从上到下  
right：从右到左  
bottom：从下到上  
left：从左到右（默认）

#### main

right：从右到左  
left：从左到右  
justify：两端对齐  
center：居中对齐

#### cross

top：从上到下  
bottom：从下到上  
baseline：跟随内容高度对齐  
center：居中对齐  
stretch：高度并排铺满

#### box

mean：子元素平分空间  
first：第一个子元素不要多余空间，其他子元素平分多余空间  
last：最后一个子元素不要多余空间，其他子元素平分多余空间  
justify：两端第一个元素不要多余空间，其他子元素平分多余空间