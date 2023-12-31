import { getOpenAIResponse } from "../src/openai";
import { functionsInfo } from "../src/functions";

export default defineEventHandler(async (event) => {
    var request = await readBody(event);
    if (typeof request === "string") {
        request = { prompt: request };
    }
    request = {
        prompt: "say hi",
        functions: functionsInfo,
        function_call: "auto",
        ...request
    };
    try {
        const response = await getOpenAIResponse(request);
        return response;
    } catch (error) {
        console.error("error", error);
        throw error
    }
});