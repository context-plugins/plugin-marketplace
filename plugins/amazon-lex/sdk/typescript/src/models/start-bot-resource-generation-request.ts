import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StartBotResourceGenerationRequest = {
  /**
   * The prompt to generate intents and slot types for the bot locale. Your description should be
   * both detailed and precise to help generate appropriate and sufficient intents for your bot.
   * Include a list of actions to improve the intent creation process.
   */
  generationInputPrompt: string;
  /** The unique identifier of the bot for which to generate intents and slot types. */
  botId: string;
  /** The version of the bot for which to generate intents and slot types. */
  botVersion: string;
  /** The locale of the bot for which to generate intents and slot types. */
  localeId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startBotResourceGenerationRequestSchema: Schema<StartBotResourceGenerationRequest> =
  s.object<StartBotResourceGenerationRequest>(
    {
      generationInputPrompt: s.string(),
      botId: s.string(),
      botVersion: s.string(),
      localeId: s.string(),
    },
    { additionalProperties: s.json() },
  );
