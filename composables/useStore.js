import { defineStore, acceptHMRUpdate } from 'pinia';

export const useStore = defineStore('store', {
	state: () => {
		return {
			messages: [],
		};
	},
	actions: {
		async getOpenAIResponse(input) {
			try {
				const response = await $fetch('/api/chat', {
					method: 'POST', body: JSON.stringify({ messages: this.messages, prompt: input })
				});
				this.messages = response.messages;
				return response;
			} catch (error) {
				error.message = error.data?.message || error.message;
				throw error;
			}
		},
	},
});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}