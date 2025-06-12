// // services/openaiService.js
const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require('@google/generative-ai');

dotenv.config({ path: "../.env" });

const apiKey = process.env.API_KEY;
// Replace with your actual API key
const API_KEY = apiKey; //
//const MODEL_NAME = "gemini-1.0-pro"; // Choose the model you want to use
const MODEL_NAME = "gemini-2.0-flash";

async function callGoogleGenerativeAI(promptContent, systemContent, previousChat) {
        try {
            const genAI = new GoogleGenerativeAI(API_KEY);
            const model = genAI.getGenerativeModel({ model: MODEL_NAME });

            const result = await model.generateContent(promptContent); //
            const response = await result.response;
            const text = response.text();
            return text;

            console.log(text);
        } catch (error) {
            console.error("Error generating content:", error);
             return `An error occurred while processing the request: ${error}`;
        }
    }
module.exports = { callGoogleGenerativeAI };