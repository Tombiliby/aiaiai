import clientAnthropic from "../config/claude.js";

/**
 * Envoie un message à Claude via l'API Anthropic et affiche la réponse dans la console.
 */
export default async function fetchMessage(): Promise<void> {
  try {
    const response = await clientAnthropic.messages.create({
      max_tokens: 1024,
      messages: [{ role: "user", content: "Hello, Claude" }],
      model: "claude-3-opus-20240229",
    });

    console.log(response.content);
  } catch (error) {
    console.error("Erreur lors de l'appel à Claude :", error);
  }
}