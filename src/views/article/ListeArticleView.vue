<script setup lang="ts">
import { fruitStore } from '@/stores/fruit';

const fruitStorage = fruitStore();

</script>


<template>
    <h1>Liste Articles/Fruits</h1>

    <ul>
        <li v-for="item in fruitStorage.fruits"> {{ item }}</li>
    </ul>

</template>

<style></style>
