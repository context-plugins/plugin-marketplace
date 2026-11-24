import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { generationStatusSchema, type GenerationStatus } from "./generation-status.js";

export type StartBotResourceGenerationResponse = {
  /** The prompt that was used generate intents and slot types for the bot locale. */
  generationInputPrompt?: string;
  /** The unique identifier of the generation request. */
  generationId?: string;
  /** The unique identifier of the bot for which the generation request was made. */
  botId?: string;
  /** The version of the bot for which the generation request was made. */
  botVersion?: string;
  /** The locale of the bot for which the generation request was made. */
  localeId?: string;
  /** The status of the generation request. */
  generationStatus?: GenerationStatus;
  /** The date and time at which the generation request was made. */
  creationDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startBotResourceGenerationResponseSchema: Schema<StartBotResourceGenerationResponse> =
  s.object<StartBotResourceGenerationResponse>(
    {
      generationInputPrompt: s.optional(s.string()),
      generationId: s.optional(s.string()),
      botId: s.optional(s.string()),
      botVersion: s.optional(s.string()),
      localeId: s.optional(s.string()),
      generationStatus: s.optional(s.lazy(() => generationStatusSchema)),
      creationDateTime: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
