<script setup lang="ts">
import { ref } from 'vue';

defineProps({
    item: {
        type: String,
        required: true,
    }
})

const count = ref(0);

function change() {
    count.value += 1;

}


const emit = defineEmits(["increment"])

function EmitIncrement() {
    change();
    emit("increment", count.value);

}



</script>

<template>

    <h1>count:{{ count }}</h1>
    <li>
        {{ item }}

    </li>

    <button @click="EmitIncrement"> emit event</button>


</template>

<style></style>
