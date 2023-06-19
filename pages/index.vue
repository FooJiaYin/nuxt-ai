<template>
    <p>Try:</p>
    <p><i>"Say hi"</i></p>
    <p><i>"Greet the user with his favorite color"</i></p>
    <p><i>"Display a joke with the color of sky"</i></p>
    <v-textarea label="Insert prompt here" v-model="input" variant="outlined" clearable></v-textarea>
    <v-btn @click="getResponse">Get Response</v-btn>
    <p>{{ response }}</p>
</template>

<script setup>
const store = useStore();
const input = ref("");
const response = ref("");

async function getResponse() {
    const res = await store.getOpenAIResponse(input.value);
    response.value = res;
}
</script>
