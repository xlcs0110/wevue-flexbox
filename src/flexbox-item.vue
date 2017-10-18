<template>
    <div :flex-box="flexBox||size">
        <slot></slot>
    </div>
</template>

<script>
    import 'flex.css'
    export default {
        props:{
            size:{
                type:String,
                default:null
            },
            flexBox:{
                type:String,
                default:null
            }
        }
    }
</script>
<style lang="less" scoped>
    
</style>