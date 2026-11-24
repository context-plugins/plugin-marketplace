import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GenerateBotElementRequest = {
  /** The intent unique Id for the bot request to generate utterances. */
  intentId: string;
  /** The bot unique Id for the bot request to generate utterances. */
  botId: string;
  /** The bot version for the bot request to generate utterances. */
  botVersion: string;
  /** The unique locale Id for the bot request to generate utterances. */
  localeId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const generateBotElementRequestSchema: Schema<GenerateBotElementRequest> =
  s.object<GenerateBotElementRequest>(
    {
      intentId: s.string(),
      botId: s.string(),
      botVersion: s.string(),
      localeId: s.string(),
    },
    { additionalProperties: s.json() },
  );
