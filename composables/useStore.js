import { defineStore, acceptHMRUpdate } from 'pinia';

export const useStore = defineStore('store', {
    state: () => {
        return {};
    },
	actions: {
		async getOpenAIResponse(input) {
			try {
				const response = await $fetch('/api/chat', { 
					method: 'POST', body: JSON.stringify({ n: 2, prompt: input }) 
				})
				return response;
			} catch (error) {
				console.error(error);
			}
		},
	},
});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}