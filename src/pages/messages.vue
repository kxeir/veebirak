<script setup>
import { ref } from 'vue';
import Message from '../components/message.vue';

let visible = ref(true);
</script>

<template>
    <div class="container content mt-3">

        <Message color="info" title="Info">
            See on info teade.
        </Message>

        <Message color="success" title="Õnnestus">
            Toiming õnnestus.
        </Message>

        <Message color="warning" title="Hoiatus">
            Midagi võib valesti minna.
        </Message>

        <Message color="danger" title="Viga">
            Midagi läks valesti.
        </Message>

        <Message color="primary" size="small">
            Väike teade ilma pealkirjata.
        </Message>

        <Message color="dark" size="large" title="Suur teade">
            Suur tumeda taustaga teade.
        </Message>

        <Message v-if="visible" color="success" title="Sulge mind" closeable @close="visible = false">
            Vajuta X et see teade sulgeda.
        </Message>

    </div>
</template>
