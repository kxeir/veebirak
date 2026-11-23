<script setup>
import { ref } from 'vue';

let joke = ref('');

let req = await fetch('https://api.chucknorris.io/jokes/random');
joke.value = await req.json();
</script>

<template>
    <h1>{{ joke.value }}</h1>
</template>