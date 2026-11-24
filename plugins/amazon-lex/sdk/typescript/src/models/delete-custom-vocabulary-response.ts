import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customVocabularyStatusSchema, type CustomVocabularyStatus } from "./custom-vocabulary-status.js";

export type DeleteCustomVocabularyResponse = {
  /** The identifier of the bot that the custom vocabulary was removed from. */
  botId?: string;
  /** The version of the bot that the custom vocabulary was removed from. */
  botVersion?: string;
  /** The locale identifier for the locale that the custom vocabulary was removed from. */
  localeId?: string;
  /** The status of removing the custom vocabulary. */
  customVocabularyStatus?: CustomVocabularyStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteCustomVocabularyResponseSchema: Schema<DeleteCustomVocabularyResponse> =
  s.object<DeleteCustomVocabularyResponse>(
    {
      botId: s.optional(s.string()),
      botVersion: s.optional(s.string()),
      localeId: s.optional(s.string()),
      customVocabularyStatus: s.optional(s.lazy(() => customVocabularyStatusSchema)),
    },
    { additionalProperties: s.json() },
  );
