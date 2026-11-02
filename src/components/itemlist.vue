<script setup>
defineProps(['items', 'title']);
</script>

<template>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="item in items" :key="item.id" :class="{
        'has-text-danger':  item.olulisus === 3,
        'has-text-warning': item.olulisus === 2,
        'has-text-success': item.olulisus === 1
      }">
        {{ item.text }}
        <input type="checkbox" v-model="item.isDone">
      </li>
    </ul>
</template>
