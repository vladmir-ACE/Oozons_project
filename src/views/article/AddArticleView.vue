<script setup lang="ts">
import { fruitStore } from '@/stores/fruit';
import { ref } from 'vue';


const fruitStorage = fruitStore();

const name = ref("");

function addFruitToStorage() {
    fruitStorage.addFruit(name.value);
    name.value = "";

}

</script>


<template>
    <h1>Add Articles/Fruit</h1>

    <form @submit.prevent="addFruitToStorage">
        <input type="text" v-model="name">
        <button type="submit"> add fruit</button>
    </form>

</template>

<style></style>
