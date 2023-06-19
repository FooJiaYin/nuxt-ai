<template>
    <v-container>
        <p>Try:</p>
        <p><i>"Say hi"</i></p>
        <p><i>"Greet the user with his favorite color"</i></p>
        <p><i>"Display a joke with the color of sky"</i></p>
        <v-textarea class="mt-4" label="Insert prompt here" v-model="input" variant="outlined" clearable></v-textarea>
        <v-btn class="mb-3" @click="getResponse">Get Response</v-btn>
        <p :class="colorClass">{{ response }}</p>
    </v-container>
</template>

<script setup>
const store = useStore();
const input = ref("");
const response = ref("");
const colorClass = ref([]);

async function getResponse() {
    const res = await store.getOpenAIResponse(input.value);
    if (res.function_call?.name == "displayColoredMessage") {
        const {color, message} = res.function_call.arguments;
        colorClass.value = ["text-" + color]
        response.value = message;
    } else {
        colorClass.value = [];
        response.value = res.content;
    }
}
</script>
