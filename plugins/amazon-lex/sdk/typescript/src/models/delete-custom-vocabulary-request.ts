import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteCustomVocabularyRequest = {
  /** The unique identifier of the bot to remove the custom vocabulary from. */
  botId: string;
  /** The version of the bot to remove the custom vocabulary from. */
  botVersion: string;
  /** The locale identifier for the locale that contains the custom vocabulary to remove. */
  localeId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteCustomVocabularyRequestSchema: Schema<DeleteCustomVocabularyRequest> =
  s.object<DeleteCustomVocabularyRequest>(
    {
      botId: s.string(),
      botVersion: s.string(),
      localeId: s.string(),
    },
    { additionalProperties: s.json() },
  );
