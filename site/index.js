const fetchContentWithClass = require('./services/fetchContent');
const generateStoryFromContent = require('./services/generateStory');

async function run() {
    const url = 'https://news.google.com/';
    const className = 'gPFEn';

    console.log('Extraction des titres...');
    const titles = await fetchContentWithClass(url, className);

    if (titles.length > 0) {
        console.log('Titres extraits :', titles);

        console.log('Génération de l’histoire...');
        const story = await generateStoryFromContent(titles);

        if (story) {
            console.log('Histoire générée :\n', story);
        } else {
            console.log('Échec de la génération de l’histoire.');
        }
    } else {
        console.log('Aucun contenu trouvé pour générer une histoire.');
    }
}

run();