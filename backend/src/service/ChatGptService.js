const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

export class ChatGptService {
    constructor() {
        this.apiKey = process.env.OPENAI_API_KEY;
    }

    async getResponse(arquivo) {
        try {
            const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
                prompt: arquivo,
                max_tokens: 150
            }, {
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json',
                },
            });

            return response.data.choices[0].text.trim();
        } catch (error) {
            console.error('Error ao pegar a resposta da openai');
        }
    }
}