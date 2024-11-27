import Anthropic from '@anthropic-ai/sdk';

const clientAnthropic = new Anthropic({
  apiKey: process.env.CLAUDE_KEY,
});

export default clientAnthropic