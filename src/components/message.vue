<script setup>
import { computed } from 'vue';

const props = defineProps({
    color: {
        type: String,
        default: '',
        validator(value) {
            return [
                'primary',
                'link',
                'info',
                'success',
                'warning',
                'danger',
                'dark',
                'light',
                'white',
                'black',
            ].includes(value);
        }
    },
    size: {
        type: String,
        validator(value) {
            return [
                'small',
                'medium',
                'large',
                'normal',
            ].includes(value);
        }
    },
    title: String,
    closeable: Boolean,
});

const emit = defineEmits(['close']);

let computedClass = computed(() => {
    let combined = 'message';
    if (props.color) combined += ' is-' + props.color;
    if (props.size) combined += ' is-' + props.size;
    return combined;
});
</script>

<template>
    <article :class="computedClass">
        <div v-if="title" class="message-header">
            <p>{{ title }}</p>
            <button v-if="closeable" class="delete" @click="$emit('close')"></button>
        </div>
        <div class="message-body">
            <slot></slot>
        </div>
    </article>
</template>
