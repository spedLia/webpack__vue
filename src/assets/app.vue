<template>
    <div>
        <v-title title="Vue 組件化"></v-title>
        <v-butto @click="handleClick">點擊按鈕</v-butto>
        <p>
            <img src="./images/cats.jpg" alt="moue" style="width: 200px;">
        </p>
        <v-input></v-input>
    </div> 
</template>

<script>

import vTitle from './components/title.vue';
import vButton from './components/button.vue';
import vInput from './components/input.vue';



export default {
    components: {
        vTitle,
        vButton,
        vInput
        
    },
    methods: {
        handleClick (e) {
            console.log(e);
        }
    }
}
</script>

<style>
    div {
        color: #fff000;
        font-size: 40px;
    }
</style>
