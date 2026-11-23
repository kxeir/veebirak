<script setup>
import RouterTabs from './components/routertabs.vue';
import Modal from './components/modal.vue';

</script>

<template>
  <RouterTabs></RouterTabs>
  <Suspense>
  <RouterView />
  </Suspense>
</template>

<style></style>