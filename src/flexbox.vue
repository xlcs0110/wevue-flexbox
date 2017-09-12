<template>
    <div :flex="`${dir?('dir:'+dir):''} ${main?('main:'+main):''} ${cross?('cross:'+cross):''} ${box?'box:'+box:''}`">
        <slot></slot>
    </div>
</template>

<script>
    import 'flex.css'
    export default {
        props:{
            dir:{
                type:String,
                default:'left'
            },
            main:{
                type:String,
                default:'left'
            },
            cross:{
                type:String,
                default:null
            },
            box:{
                type:String,
                default:null
            }
        }
    }
</script>
<style lang="less" scoped>
    
</style>