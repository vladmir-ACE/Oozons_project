<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import FirstComponent from './components/FirstComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>

  <HeaderComponent></HeaderComponent>

  <FirstComponent></FirstComponent>

  <FooterComponent></FooterComponent>


</template>
