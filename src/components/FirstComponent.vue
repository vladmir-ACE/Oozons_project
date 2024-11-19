<script setup lang="ts">
import { ref } from 'vue';
import ItemComponent from './widgets/ItemComponent.vue';
import TestComponent from './TestComponent.vue';


// variables
const nom = ref<string>("toto");

const show: boolean = true;

// variable modifiable 
const fruits = ref(["tomates", "oranges", "mangues"])

// functions

function addFruit(fruit: string) {
    nom.value = fruit;
}


function listenChildEmit(value: any) {
    console.log(value);
}

</script>

<template>

    <h1 v-if="show">HELLO WORLD {{ nom }}</h1>

    <h1>Liste des fruits</h1>
    <ul>
        <ItemComponent :item="fruit" v-for="fruit in fruits" @increment="listenChildEmit"></ItemComponent>
    </ul>

    <button @click="addFruit('bananes')">Ajouter</button>

    <TestComponent>
        <template #slot1>
            <p> this is slot 1 code</p>
        </template>

        <template #slot2>
            <p> this is slot 2 code</p>
        </template>

    </TestComponent>




</template>

<style></style>
