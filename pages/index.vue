<template>
    <v-container>
        <div class="my-5">
            <h3>Available functions</h3>
            <ol>
                <li><code>displayColoredMessage(color, message)</code>: Use this function to display a message with a custom color.</li>
                <li><code>getUserList()</code>: Use this function to get the list of users.</li>
                <li><code>getUserInfo(userName)</code>: Use this function to get a user's information (gender and favorite color) by their name.</li>
                <li><code>updateUserInfo({name, favoriteColor, gender})</code>Use this function to update a user's information</li>
            </ol>
        </div>
        <h3>Messages</h3>
        <div v-if="messages.length == 0">
            <p>Try:</p>
            <p><i>"Say hi"</i></p>
            <p><i>"Greet the user with his favorite color"</i></p>
            <p><i>"Display a joke with the color of sky"</i></p>
        </div>
        <Messages v-else :messages="messages" />
        <p :class="colorClass">{{ response }}</p>
        <v-textarea class="mt-5" label="Insert prompt here" v-model="input" variant="outlined" clearable></v-textarea>
        <v-btn class="mb-3" @click="getResponse">Get Response</v-btn>
    </v-container>
</template>

<script setup>
const store = useStore();
const input = ref("");
const response = ref("");
const messages = ref([]);
const colorClass = ref([]);

async function getResponse() {
    try {
        const res = await store.getOpenAIResponse(input.value);
        if (res.function_call?.name == "displayColoredMessage") {
            const { color, message } = res.function_call.arguments;
            colorClass.value = ["text-" + color];
            response.value = message;
        } else {
            colorClass.value = [];
            response.value = res.content;
        }
        messages.value = res.messages;
    } catch (error) {
        colorClass.value = ["text-error"];
        console.error(error.message);
        response.value = error.message;
    }
}
</script>
