<template>
    <v-container>
        <v-row v-for="(message, index) in messages" :key="index">
            <v-col cols="2">{{ message.role }}</v-col>
            <v-col>
                <code v-if="message.role == 'function'">{{ message.content }}</code>
                <p v-else-if="message.content != null">{{ message.content }}</p>
                <code v-else>{{ message.function_call.name }}({{ message.function_call.arguments }})</code>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
const props = defineProps(['messages']);
</script>