import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteIntentRequest = {
  /** The unique identifier of the intent to delete. */
  intentId: string;
  /** The identifier of the bot associated with the intent. */
  botId: string;
  /** The version of the bot associated with the intent. */
  botVersion: string;
  /**
   * The identifier of the language and locale where the bot will be deleted. The string must match
   * one of the supported locales. For more information, see Supported languages.
   */
  localeId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteIntentRequestSchema: Schema<DeleteIntentRequest> = s.object<DeleteIntentRequest>(
  {
    intentId: s.string(),
    botId: s.string(),
    botVersion: s.string(),
    localeId: s.string(),
  },
  { additionalProperties: s.json() },
);
