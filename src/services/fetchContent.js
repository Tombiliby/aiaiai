const axios = require('axios');
const cheerio = require('cheerio');

// Fonction pour extraire le contenu par classe
async function fetchContentWithClass(url, className) {
    try {
        const response = await axios.get(url, {
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
        });

        const $ = cheerio.load(response.data);
        const elements = $(`.${className}`);
        const results = [];

        elements.each((i, el) => {
            results.push($(el).text().trim());
        });

        return results;
    } catch (error) {
        console.error(`Erreur lors de l'extraction : ${error.message}`);
        return [];
    }
}

module.exports = fetchContentWithClass;