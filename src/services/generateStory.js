const clientOpenAI = require('../config/openai');

// Fonction pour générer une histoire avec OpenAI
async function generateStoryFromContent(contentList) {
    try {
        const prompt = `
Tu es un écrivain imaginatif. À partir de cette liste de titres : 
${contentList.join(', ')}
Rédige une histoire captivante et originale, en intégrant les idées de manière cohérente.
        `;

        console.log(prompt)

        const response = await clientOpenAI.chat.completions.create({
            model: "o1-preview",
            messages: [{ role: 'user', content: "bonjour" }],
          });

        console.log(response)

/*
        const response = await clientOpenAI.chat.completions.create({
            messages: [{ role: 'user', content: prompt }],
            model: "gpt-4o-mini",
            stream: true,
            //model: 'gpt-4o', // Utilise 'gpt-4' ou 'gpt-3.5-turbo'
            //max_tokens: 1000, // Ajuste selon la longueur désirée
        });
*/
        return response.data.choices[0].message.content;

    } catch (error) {
        console.error(`Erreur lors de la génération : ${error.message}`);
        return null;
    }
}

module.exports = generateStoryFromContent;


/*
async function main() {
    const chatCompletion = await client.chat.completions.create({
      messages: [{ role: 'user', content: 'Say this is a test' }],
      model: 'gpt-4o',
    });
  }
  */