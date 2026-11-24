import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeBotResourceGenerationRequest = {
  /** The unique identifier of the bot for which to return the generation details. */
  botId: string;
  /** The version of the bot for which to return the generation details. */
  botVersion: string;
  /** The locale of the bot for which to return the generation details. */
  localeId: string;
  /** The unique identifier of the generation request for which to return the generation details. */
  generationId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeBotResourceGenerationRequestSchema: Schema<DescribeBotResourceGenerationRequest> =
  s.object<DescribeBotResourceGenerationRequest>(
    {
      botId: s.string(),
      botVersion: s.string(),
      localeId: s.string(),
      generationId: s.string(),
    },
    { additionalProperties: s.json() },
  );
