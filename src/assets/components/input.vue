<template>
    <div>
        <input type="text" v-model="message" placeholder="輸入">
        <p>{{message}}</p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            message: ''
        }
    }
}
</script>

<style>
input {
    width: 100px;
}
</style>
